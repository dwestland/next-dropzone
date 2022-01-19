import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const MyDropZone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log('acceptedFiles', acceptedFiles)
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
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
  )
}
export default MyDropZone
