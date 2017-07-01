import React, { Component } from 'react'
import Data from '../Data'

import BookComment from './sub-components/BookComment'

export default class BookDetails extends Component {
  constructor (props) {
    super(props)

    this.state = {
      book: {
        image: '',
        title: '',
        description: '',
        author: '',
        price: '',
        comments: []
      }
    }
  }

  componentDidMount () {
    let bookId = this.props.match.params.id

    Data
      .getBookById(bookId)
      .then((book) => {
        this.setState({
          book: book
        })
      })
  }

  render () {
    let comments = this.state.book.comments.map((comment, index) => {
      return <BookComment key={index} comment={comment} />
    })

    return (
      <div>
        <img src={this.state.book.image} alt='book' />
        <h2>{this.state.book.title}</h2>
        <h3>{this.state.book.author}</h3>
        <p>{this.state.book.description}</p>
        <p><i>Price: {this.state.book.price}</i></p>
        {comments}
      </div>
    )
  }
}
