import React, { Component } from 'react'

export default class BookImage extends Component {
  render () {
    return (
      <div className='col-sm-6 col-md-6 col-lg-6' >
        <div className='gallery-item' >
          <div className='gallery-image' >
            <a className='gallery' href={this.props.book.image} title={this.props.book.title} >
              <img src={this.props.book.image} alt='Gallery 1' />
              <div className='gallery-caption' >
                <div className='gallery-icon' >
                  <span className='icon-magnifying-glass' />
                </div>
              </div>
            </a>
          </div>
          <h3>Author: {this.props.book.author}</h3>
          <h4>Title: {this.props.book.title}</h4>
          <p>Description: {this.props.book.description}</p>
        </div>
      </div>
    )
  }
}
