import React, { Component } from 'react'
import Data from '../Data'

import BookView from './sub-components/BookView'
import PageNumbers from './sub-components/PageNumbers'

export default class AllBooks extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: []
    }
    this.booksLenght = 0

    this.updateSort = this.updateSort.bind(this)
  }

  updateSort (event) {
    let sort = event.target.value

    Data
      .getBooks()
      .then((books) => {
        if (sort === 'title') {
          books = this.sortBookByTitle(books)
        } else if (sort === 'author') {
          books = this.sortBookByAuthor(books)
        } else {
          books = this.sortBookByDate(books)
        }

        this.setState({
          books: books
        })
      })
  }

  sortBookByDate (books) {
    return books.sort((b1, b2) => {
      return new Date(b2.creationDate) - new Date(b1.creationDate)
    })
  }

  sortBookByAuthor (books) {
    return books.sort((b1, b2) => {
      return b1.author.localeCompare(b2.author)
    })
  }

  sortBookByTitle (books) {
    return books.sort((b1, b2) => {
      return b1.title.localeCompare(b2.title)
    })
  }

  componentDidMount () {
    Data
      .getBooks()
      .then((books) => {
        this.booksLenght = books.length
        books = this.sortBookByDate(books)
        books = books.slice(0, 10)
        this.setState({
          books: books
        })
      })
  }

  render () {
    let booksView = this.state.books.map((book) => {
      return <BookView key={book._id} book={book} />
    })

    let pages = this.booksLenght / 10
    let pageNumbers = <PageNumbers pages={pages} toPage='books/all' />

    return (
      <div>
        <h3>Books:</h3>
        <p>Sort by: </p>
        <select onChange={this.updateSort} >
          <option value='title' >Title</option>
          <option value='author' >Author</option>
          <option value='date' >Date</option>
        </select>
        {booksView}
        {pageNumbers}
      </div>
    )
  }
}
