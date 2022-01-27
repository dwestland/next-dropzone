/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import Nav from '@/components/Nav'

const PasteFunction = () => {
  const [src, setSrc] = useState()
  const [blob, setBlob] = useState(null)

  // let blob = null

  const handleOnPaste = (e) => {
    console.log('%c e ', 'background: red; color: white', e)

    const { items } = e.clipboardData || e.originalEvent.clipboardData

    console.log('%c items ', 'background: red; color: white', items)

    console.log(
      '%c JSON.stringify(items) ',
      'background: red; color: white',
      JSON.stringify(items)
    )

    // let blob = null
    // blob = items[0].getAsFile()

    setBlob(items[0].getAsFile())

    // if (blob !== null) {
    //   console.log('%c Are we getting there?? ', 'background: red; color: white')
    //   const reader = new FileReader()
    //   reader.onload = function (e) {
    //     setSrc(e.target.result)
    //   }
    //   reader.readAsDataURL(blob)

    //   console.log('%c { reader } ', 'background: red; color: white', { reader })
    // }
  }

  useEffect(() => {
    console.log('%c blob - useEffect ', 'background: red; color: white', blob)
    if (blob !== null) {
      console.log('%c Are we getting there?? ', 'background: red; color: white')
      const reader = new FileReader()
      reader.onload = function (e) {
        setSrc(e.target.result)
      }
      reader.readAsDataURL(blob)

      console.log('%c { reader } ', 'background: red; color: white', {
        reader,
      })
    }
  }, [blob])

  console.log('%c blob ', 'background: red; color: white', blob)

  const uploadToServer = async () => {
    console.log('%c blob.name ', 'background: red; color: white', blob.name)

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

// https://codesandbox.io/s/0bvvy?file=/src/Logic/index.js:64-833
