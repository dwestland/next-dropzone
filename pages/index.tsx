/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import Nav from '@/components/Nav'

const Home = () => {
  const [image, setImage] = useState(null)

  // Unused functionality
  const onDrop = useCallback((acceptedFiles) => {
    console.log('acceptedFiles', acceptedFiles)
    // Do something with the files
  }, [])

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop })

  const uploadToServer = async () => {
    const body = new FormData()
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
      <p>Uses react-dropzone. Drag and drop or sect files only.</p>
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
    </div>
  )
}

export default Home
