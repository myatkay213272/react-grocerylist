import React from 'react'

const Footer = ({length}) => {

  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <p>{length} List {length === 1 ? 'item' : 'items'}</p>
    </footer>
  )
}

export default Footer
