import React from 'react'

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear()
  return (
    <footer>
      <p>Copyright &copy; <time dateTime={year}>{year}</time></p>
    </footer>
  )
}

export default Footer
