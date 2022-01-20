import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <div>
    <br />
    <Link href="/">
      <a>Home</a>
    </Link>
    <br />
    <Link href="/preview">
      <a>Preview</a>
    </Link>
    <br />
    <Link href="/paste-from-clipboard">
      <a>Paste from Clipbord</a>
    </Link>
    <br />
  </div>
)

export default Nav
