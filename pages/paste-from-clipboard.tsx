/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Nav from '@/components/Nav'

const PasteFromClipboard = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log('acceptedFiles', acceptedFiles)
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  })

  return (
    <div className="container home-div">
      <h1>Paste from Clipboard</h1>
      <Nav />
      <>
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag &amp; drop some files here, or click to select files</p>
          )}
        </div>

        <p>{}</p>
      </>
    </div>
  )
}

export default PasteFromClipboard
