import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
// import { updateSourceFile } from 'typescript'

const Preview = () => {
  const [yourImage, setImage] = useState([])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((upFile) =>
          Object.assign(upFile, {
            preview: URL.createObjectURL(upFile),
          })
        )
      )
    },
  })

  console.log('yourImage[0].name:', yourImage[0].name)

  return (
    <div>
      <p>Preview</p>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the Image here..</p>
        ) : (
          <p>Drag &amp; Drop Image here || or click to see Image</p>
        )}
      </div>
      <div>
        <h1>{yourImage[0].name}</h1>
        {yourImage.map((upFile) => (
          <div>
            <img
              src={upFile.preview}
              style={{
                width: '600px',
                height: '400px',
                border: '3px solid #ccc',
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
