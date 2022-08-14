import React from 'react'
import './index.css'

export default function Header({black}) {
  return (
    <header className={black ? 'teste' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
        </a>
      </div>
      <div className="header--avatar">
        <a href="/">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" />
        </a>
      </div>
    </header>
  )
}
