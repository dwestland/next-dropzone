import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <div>
    <br />
    <Link href="/">
      <a>Home - Dropzone</a>
    </Link>
    <br />
    <Link href="/preview">
      <a>Dropzone with Image Preview</a>
    </Link>
    <br />
    <Link href="/paste-from-clipboard">
      <a>Paste from Clipboard with Classes - No Dropzone</a>
    </Link>
    <br />
    <Link href="/image-upload">
      <a>Image Upload - No Dropzone</a>
    </Link>
    <br />
  </div>
)

export default Nav
