import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PageNumbers extends Component {
  render () {
    let numberOfPages = this.props.pages
    let toPage = this.props.toPage
    let pages = []
    for (let i = 0; i < numberOfPages; i++) {
      let page = (
        <p>
          <Link to={`/${toPage}/${i}`} >Page: {i}</Link>
          {'    '}
        </p>
      )

      pages.push(page)
    }

    return (
      <div>
        {pages}
      </div>
    )
  }
}
