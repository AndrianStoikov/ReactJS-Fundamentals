import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {
  render () {
    return (
      <nav>
        <ul>
          <Link to='/' >
            Home{''}
          </Link>
          <li />
          <li />
          <Link to='/books/all' >
            All Books
          </Link>
        </ul>
      </nav>
    )
  }
}