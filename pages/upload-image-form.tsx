/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react'
import Nav from '@/components/Nav'

export default function PrivatePage() {
  const [image, setImage] = useState(null)
  const [createObjectURL, setCreateObjectURL] = useState(null)

  const uploadToClient = (e) => {
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0]

      setImage(i)
      setCreateObjectURL(URL.createObjectURL(i))
    }
  }

  const uploadToServer = async () => {
    const body = new FormData()
    console.log('file', image)
    body.append('file', image)
    await fetch('/api/upload', {
      method: 'POST',
      body,
    })
  }

  console.log(
    '%c createObjectURL ',
    'background: red; color: white',
    createObjectURL
  )

  return (
    <div className="container home-div">
      <h1>Home</h1>
      <Nav />
      <div>
        {image && <h2>{image.name}</h2>}

        <img src={createObjectURL} alt={!!image && image.name} />
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
