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
      <a>Select File, Upload to Server - No Dropzone</a>
    </Link>
    <br />
    <Link href="/paste-function">
      <a>Paste in Input, Upload to Server - No Dropzone</a>
    </Link>
    <br />
    <Link href="/paste-new">
      <a>Paste on Page, Upload to Server - No Dropzone</a>
    </Link>
    <br />
  </div>
)

export default Nav
