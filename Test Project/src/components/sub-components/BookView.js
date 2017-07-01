import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BookView extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <h3>Author: {this.props.book.author}</h3>
        <Link to={`/books/${this.props.book._id}`} >
          Go to book details
        </Link>
        <p><bold>Creation: {this.props.book.creationDate}</bold></p>
        <hr />
      </div>
    )
  }
}