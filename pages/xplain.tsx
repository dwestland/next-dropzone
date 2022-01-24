/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
import Nav from '@/components/Nav'

function Plain() {
  return (
    <div className="container home-div">
      <h1>Plain</h1>
      <Nav />
      <form method="POST" action="/upload" encType="multipart/form">
        <input type="file" name="image" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Plain
