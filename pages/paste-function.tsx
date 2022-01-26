/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import Nav from '@/components/Nav'

const PasteFunction = () => {
  const [src, setSrc] = useState()
  const [blob, setBlob] = useState(null)

  // let blob = null

  const handleOnPaste = (event) => {
    console.log('%c event ', 'background: red; color: white', event)

    const { items } = event.clipboardData || event.originalEvent.clipboardData

    console.log('%c items ', 'background: red; color: white', items)

    console.log(
      '%c JSON.stringify(items) ',
      'background: red; color: white',
      JSON.stringify(items)
    )

    // let blob = null
    // blob = items[0].getAsFile()

    setBlob(items[0].getAsFile())

    if (blob !== null) {
      console.log('%c Are we getting there?? ', 'background: red; color: white')
      const reader = new FileReader()
      reader.onload = function (event) {
        setSrc(event.target.result)
      }
      reader.readAsDataURL(blob)

      console.log('%c { reader } ', 'background: red; color: white', { reader })
    }
  }

  console.log('%c blob ', 'background: red; color: white', blob)

  const uploadToServer = async () => {
    const body = new FormData() // create set of key/value pairs for multipart/form-data
    body.append('file', blob)
    await fetch('/api/upload', {
      method: 'POST',
      body,
    })
  }

  return (
    <div className="container home-div">
      <h1>Paste Function</h1>
      <Nav />
      <textarea onPaste={handleOnPaste} />
      <br />
      <img src={src} alt="pic" />
      <button type="submit" onClick={uploadToServer}>
        Send to server
      </button>
    </div>
  )
}

export default PasteFunction

// https://codesandbox.io/s/0bvvy?file=/src/Logic/index.js:64-833
