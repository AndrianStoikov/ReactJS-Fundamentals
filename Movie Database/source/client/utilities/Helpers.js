import React from 'react'

import MovieVotePanel from '../components/sub-components/MovieVotePanel'
import MovieCommentsPanel from '../components/sub-components/MovieCommentsPanel'
import MoviePanelsToggle from '../components/sub-components/MoviePanelsToggle'
import MoviePoster from '../components/sub-components/MoviePoster'

export default class Helpers {
  static appendToArray (value, array) {
    array.push(value)
    return array
  }

  static prependToArray (value, array) {
    array.push(value)
    return array
  }

  static removeFromArray (value, array) {
    let index = array.indexOf(value)

    if (index !== -1) {
      array.splice(index, 1)
    }

    return array
  }

  static nodesMovieCard (state, props, toggleCommentsPanel, toggleVotePanel) {
    let nodes = {}

    if (state.showCommentsPanel) {
      nodes.commentsPanel = <MovieCommentsPanel movieId={props.movie._id} />
    }

    if (state.showVotePanel) {
      nodes.votePanel = <MovieVotePanel movieId={props.movie._id} />
    }

    nodes.panelToggle =
      <MoviePanelsToggle
        toggleCommentsPanel={toggleCommentsPanel}
        toggleVotePanel={toggleVotePanel}
        showCommentsPanel={state.showCommentsPanel}
        showVotePanel={state.showVotePanel}
        movieId={props.movie._id}
      />

    nodes.genres = props.movie.genres.map(genre => {
      return (
        <strong key={props.movie._id + genre} >{genre}</strong>
      )
    })

    nodes.poster = <MoviePoster posterUrl={props.movie.moviePosterUrl} />

    return nodes
  }
}
