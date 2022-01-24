import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'

const mv = require('mv')

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm()

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      console.log('boom', fields, files)
      console.log('boom2', files.file.filepath)
      const oldPath = files.file.filepath
      const newPath = `./public/images/uploads/${files.file.originalFilename}`
      mv(oldPath, newPath, (err) => {})
      res.status(200).json({ fields, files })
    })
  })
}
