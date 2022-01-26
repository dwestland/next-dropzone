/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import Nav from '@/components/Nav'

const PasteFunction = () => {
  const [src, setSrc] = useState()

  const handleOnPaste = (event) => {
    console.log({ event })
    const { items } = event.clipboardData || event.originalEvent.clipboardData

    console.log('items: ', JSON.stringify(items))

    let blob = null
    // for (let i = 0; i < items.length; i++) {
    //   if (items[i].type.indexOf('image') === 0) {
    //     blob = items[i].getAsFile()
    //   }
    // }
    blob = items[0].getAsFile()

    console.log('blob: ', blob)

    if (blob !== null) {
      // console.log({ blob });
      const reader = new FileReader()
      reader.onload = function (event) {
        // console.log(event.target.result); // data url!
        // console.log(event.target);
        setSrc(event.target.result)
      }
      reader.readAsDataURL(blob)

      console.log({ reader })
    }
  }

  const uploadToServer = async () => {
    const body = new FormData() // create set of key/value pairs for multipart/form-data
    body.append('file', src)
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
