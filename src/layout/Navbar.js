import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Library User Registration</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="btn btn-outline-dark text-light" to="/addUser">Add Library User</Link>
 
  </div>
</nav>



    </div>
  )
}
