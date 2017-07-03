import React from 'react'

import MovieVotePanel from '../components/sub-components/MovieVotePanel'
import MovieCommentsPanel from '../components/sub-components/MovieCommentsPanel'
import MoviePanelsToggle from '../components/sub-components/MoviePanelsToggle'
import MoviePoster from '../components/sub-components/MoviePoster'

export default class Helpers {
  static formatMovieRating (score, votes) {
    let rating = score / votes
    if (isNaN(rating)) {
      rating = 0
    }

    if (rating % 1 !== 0) {
      rating = rating.toFixed(1)
    }

    return rating
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
