/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react'
import Nav from '@/components/Nav'

const PlainPage = () => {
  const [image, setImage] = useState(null)
  const [createObjectURL, setCreateObjectURL] = useState(null)

  const uploadToClient = (e) => {
    console.log('%c e ', 'background: green; color: white', e)
    if (e.target.files && e.target.files[0]) {
      const imageTarget = e.target.files[0]
      setImage(imageTarget)
      setCreateObjectURL(URL.createObjectURL(imageTarget))
    }
  }

  const uploadToServer = async () => {
    const body = new FormData() // create set of key/value pairs for multipart/form-data
    body.append('file', image)
    await fetch('/api/upload', {
      method: 'POST',
      body,
    })
  }

  return (
    <div className="container home-div">
      <h1>Image Upload - No Dropzone</h1>
      <p>
        Does not use react-dropzone. Select file from input field. Has image
        preview. Can upload image to public folder using an API. Uses formidable
        and mv on backend.
      </p>
      <Nav />
      <div>
        {image && <h2>{image.name}</h2>}

        <img
          src={createObjectURL}
          style={{ border: '1px solid green' }}
          alt=""
        />
        <h4>Select Image</h4>
        <input
          type="file"
          name="myImage"
          // style={{ color: 'rgba(0, 0, 0, 0)' }}
          onChange={uploadToClient}
        />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
      </div>
    </div>
  )
}

export default PlainPage
