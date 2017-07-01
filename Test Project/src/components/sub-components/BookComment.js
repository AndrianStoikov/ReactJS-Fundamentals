import React, { Component } from 'react'

export default class BookComment extends Component {
  render () {
    return (
      <div>
        <p>Comment</p>
        <p>{this.props.comment}</p>
      </div>
    )
  }
}