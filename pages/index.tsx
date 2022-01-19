/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
// import styles from '../styles/Home.module.css'
import MyDropZone from '@/components/MyDropZone'
import Nav from '@/components/Nav'

const Home = () => (
  <div className="container home-div">
    <h1>Home</h1>
    <Nav />
    <MyDropZone />
  </div>
)

export default Home
