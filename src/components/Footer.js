import React from 'react'

const Footer = () => {
  const today = new Date()

  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer
