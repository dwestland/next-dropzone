/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react'
import Nav from '@/components/Nav'

export default function PrivatePage(props) {
  const [image, setImage] = useState(null)
  const [createObjectURL, setCreateObjectURL] = useState(null)

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0]

      setImage(i)
      setCreateObjectURL(URL.createObjectURL(i))
    }
  }

  const uploadToServer = async (event) => {
    const body = new FormData()
    // console.log("file", image)
    body.append('file', image)
    const response = await fetch('/api/upload', {
      method: 'POST',
      body,
    })
  }

  return (
    <div className="container home-div">
      <h1>Home</h1>
      <Nav />
      <div>
        <img src={createObjectURL} />
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
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
