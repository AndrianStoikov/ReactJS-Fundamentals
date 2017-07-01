import React, { Component } from 'react'
import Data from '../Data'

import BookView from './sub-components/BookView'

export default class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: []
    }
  }

  sortBookByDate (books) {
    return books.sort((b1, b2) => {
      return new Date(b2.creationDate) - new Date(b1.creationDate)
    })
  }

  componentDidMount () {
    Data
      .getBooks()
      .then((books) => {
        books = this.sortBookByDate(books)
        books = books.slice(0, 6)
        this.setState({
          books: books
        })
      })
  }

  render () {
    let booksView = this.state.books.map((book) => {
      return <BookView key={book._id} book={book} />
    })

    return (
      <div>
        <h3>Home:</h3>
        {booksView}
      </div>
    )
  }
}
