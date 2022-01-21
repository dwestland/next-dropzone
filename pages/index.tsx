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

  console.log(
    '%c acceptedFiles ',
    'background: red; color: white',
    acceptedFiles
  )

  return (
    <div className="container home-div">
      <h1>Home</h1>
      <Nav />

      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag &amp; drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  )
}

export default Home
