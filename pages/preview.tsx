/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Nav from '@/components/Nav'

const Preview = () => {
  const [yourImage, setImage] = useState([])
  const [name, setName] = useState('')
  const [size, setSize] = useState(0)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setName(acceptedFiles[0].name)
      setSize(acceptedFiles[0].size)
      setImage(
        acceptedFiles.map((upFile) =>
          Object.assign(upFile, {
            preview: URL.createObjectURL(upFile),
          })
        )
      )
    },
  })

  return (
    <div className="container">
      <h1>Dropzone with Image Preview</h1>
      <p>
        Uses react-dropzone. Drag and drop or sect files only. Has image
        preview.
      </p>
      <Nav />
      <div {...getRootProps()} className=" dropzone">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the Image here..</p>
        ) : (
          <p>Drag &amp; Drop Image here or click to see Image</p>
        )}
      </div>
      <div>
        {name && (
          <>
            <strong>Name:</strong> {name} &nbsp;
          </>
        )}
        {size > 0 && (
          <>
            <strong>Size:</strong> {size} &nbsp;
          </>
        )}
        {yourImage.map((upFile) => (
          <div>
            <img
              src={upFile.preview}
              style={{
                height: '400px',
                objectFit: 'cover',
                width: '600px',
              }}
              alt="preview"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Preview
