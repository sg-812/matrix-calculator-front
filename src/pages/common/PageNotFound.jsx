import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
        <h2>Sorry requested page is not found</h2>
        <h3>Go to <Link to="/sign-in">Login</Link></h3>
    </div>
  )
}

export default PageNotFound