import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <div>
      <footer>
        <div className='footer-top'>
            <img src="/logo.png" alt="logo" />
            <hr />
        </div>

        <div className="footer-bottom">
            <p>Made with React and Rough Notation</p>
            <p>© {year}</p>
        </div>
      </footer>
    </div>
  )
}
