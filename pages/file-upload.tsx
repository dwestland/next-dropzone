/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react'
import axios from 'axios'
import Nav from '@/components/Nav'

const FileUpload = () => {
  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Choose File')
  const [uploadedFile, setUploadedFile] = useState({})

  const onChange = (e) => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await axios.post('/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      const { fileName, filePath } = res.data
      setUploadedFile({ fileName, filePath })
    } catch (err) {
      if (err.response.status === 500) {
        // Add toast error message
      }
    }
  }

  return (
    <div className="container home-div">
      <h1>Plain</h1>
      <Nav />
      <form onSubmit={onSubmit}>
        <div>
          <input type="file" id="customFile" onChange={onChange} />
          <label htmlFor="customFile">{filename}</label>
        </div>

        <button type="submit">Upload</button>
      </form>
      {uploadedFile ? (
        <div>
          <div>
            <h3>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt="" />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default FileUpload
