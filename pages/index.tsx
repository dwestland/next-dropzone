/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
// import styles from '../styles/Home.module.css'

import Nav from '@/components/Nav'

const Home = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log('acceptedFiles', acceptedFiles)
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop })

  console.log(
    '%c acceptedFiles ',
    'background: red; color: white',
    acceptedFiles
  )

  if (acceptedFiles.length > 0) {
    console.log(
      '%c acceptedFiles[0].name ',
      'background: red; color: white',
      acceptedFiles[0].name
    )
  }
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
    </div>
  )
}

export default Home
