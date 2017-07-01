import alt from '../alt'
import HomeActions from '../actions/HomeAction'

class HomeStore {
  constructor () {
    this.bindActions(HomeActions)

    this.toptenMovies = []
  }

  onGetTopTenMoviesSuccess (movies) {
    this.topTenMovies = movies
  }

  onGetTopTenMoviesFail (err) {
    console.log('Couldn\'t connet to DB', err)
  }
}

export default alt.createStore(HomeStore)
