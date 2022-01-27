/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import Nav from '@/components/Nav'

const PasteImage = () => {
  const [image, setImage] = useState()
  const [createObjectURL, setCreateObjectURL] = useState(null)
  const [src, setSrc] = useState()
  const [blob, setBlob] = useState(null)

  // const [blob, setBlob] = useState(null)

  // useEffect(() => {
  //   console.log('window.Clipboard', window.Clipboard);
  // }, [window]);

  // const pasteHandler = (e) => {
  //   console.log('e.clipboardData.files[0]', e.clipboardData.files[0])
  //   eagle = e.clipboardData.files[0]
  // }
  // const pasteHandler = (e) => {
  //   console.log('%c e ', 'background: red; color: white', e)
  //   if (e.target.files && e.target.files[0]) {
  //     const imageTarget = e.target.files[0]
  //     setImage(imageTarget)
  //     setCreateObjectURL(URL.createObjectURL(imageTarget))
  //   }
  // }
  const pasteHandler = (e) => {
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

  useEffect(() => {
    window.addEventListener('paste', pasteHandler)
  }, [])

  const uploadToServer = async () => {
    console.log('%c blob ', 'background: black; color: white', blob)

    const body = new FormData() // create set of key/value pairs for multipart/form-data
    body.append('file', blob)
    await fetch('/api/upload', {
      method: 'POST',
      body,
    })
  }

  return (
    <div className="container">
      <h1>Paste Function - no input field</h1>
      <p>
        Does not use react-dropzone. Click on page and paste from clipboard. Has
        image preview. Can upload image to public folder using an API. Uses
        formidable and mv on backend.
      </p>
      <Nav />
      {/* <input onPaste={handleOnPaste} /> */}
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

// https://codesandbox.io/s/0bvvy?file=/src/Logic/index.js:64-833
