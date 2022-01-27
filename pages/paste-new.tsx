/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useCallback, useState, useEffect } from 'react'
import Nav from '@/components/Nav'

const PasteImage = () => {
  const [src, setSrc] = useState()
  const [blob, setBlob] = useState(null)

  const pasteHandler = (e) => {
    const { items } = e.clipboardData || e.originalEvent.clipboardData
    setBlob(items[0].getAsFile())
  }

  useEffect(() => {
    if (blob !== null) {
      const reader = new FileReader()
      reader.onload = function (e) {
        setSrc(e.target.result)
      }
      reader.readAsDataURL(blob)
    }
  }, [blob])

  useEffect(() => {
    window.addEventListener('paste', pasteHandler)
  }, [])

  const uploadToServer = async () => {
    const body = new FormData()
    body.append('file', blob)
    await fetch('/api/upload', {
      method: 'POST',
      body,
    })
  }

  return (
    <div className="container">
      <h1>Paste on Page, Upload to Server</h1>
      <p>
        Does not use react-dropzone. Click on page and paste from clipboard. Has
        image preview. Can upload image to public folder using an API. Uses
        formidable and mv on backend.
      </p>
      <Nav />
      <br />
      <br />
      {src && <img src={src} alt="pic" />}
      <button type="submit" onClick={uploadToServer}>
        Send to server
      </button>
    </div>
  )
}

export default PasteImage
