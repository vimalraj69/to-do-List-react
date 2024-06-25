import React from 'react'

const Footer = ({length}) => {
  return (
    <footer className="footer">{length} {(length==1)? "task" : "tasks"} </footer>
  )
}

export default Footer