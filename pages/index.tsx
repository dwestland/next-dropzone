/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import Nav from '@/components/Nav'

const Home = () => {
  const [image, setImage] = useState(null)
  const [createObjectURL, setCreateObjectURL] = useState(null) // Unused

  // //////////////////////////////////////////////////////////////////////////////
  // Unused functionality
  const onDrop = useCallback((acceptedFiles) => {
    console.log('acceptedFiles', acceptedFiles)
    // Do something with the files
  }, [])
  // //////////////////////////////////////////////////////////////////////////////

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop }) // Argument of type '{ onDrop: any; }' is not assignable to parameter of type 'DropzoneOptions'.

  const uploadToServer = async () => {
    const body = new FormData() // create set of key/value pairs for multipart/form-data
    body.append('file', image)
    await fetch('/api/upload', {
      method: 'POST',
      body,
    })
  }

  useEffect(() => {
    if (acceptedFiles && acceptedFiles[0]) {
      const imageTarget = acceptedFiles[0]
      setImage(imageTarget)
    }
  }, [acceptedFiles])

  return (
    <div className="container home-div">
      <h1>Home - Dropzone</h1>
      <Nav />
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag &amp; drop some files here, or click to select files</p>
        )}
        {acceptedFiles.length > 0 && acceptedFiles[0].name}
      </div>
      <button type="submit" onClick={uploadToServer}>
        Send to server
      </button>
    </div>
  )
}

export default Home
