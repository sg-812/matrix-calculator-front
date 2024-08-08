import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h2>You need too login at first to visit the page</h2>
        <h3>Go to <Link to="/sign-in">Login</Link></h3>
    </div>
  )
}

export default Error