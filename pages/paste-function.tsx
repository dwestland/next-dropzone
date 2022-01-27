/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react'
import Nav from '@/components/Nav'

const PasteFunction = () => {
  const [src, setSrc] = useState()
  const [blob, setBlob] = useState(null)

  const handleOnPaste = (e) => {
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

  const uploadToServer = async () => {
    const body = new FormData()
    body.append('file', blob)
    await fetch('/api/upload', {
      method: 'POST',
      body,
    })
  }

  return (
    <div className="container home-div">
      <h1>Paste in Input, Upload to Server</h1>
      <p>
        Does not use react-dropzone. Click in input and paste from clipboard.
        Has image preview. Can upload image to public folder using an API. Uses
        formidable and mv on backend.
      </p>
      <Nav />
      <input onPaste={handleOnPaste} />
      <br />
      {src && <img src={src} alt="pic" />}
      <button type="submit" onClick={uploadToServer}>
        Send to server
      </button>
    </div>
  )
}

export default PasteFunction
