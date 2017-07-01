/**
 * Created by Andrian on 1.7.2017 г..
 */
import alt from '../alt'

class FooterActions {
  constructor() {
    this.generateActions(
      'getFiveRecentMoviesSuccess'
    )
  }

  getFiveRecentMovies() {
    let request = {
      method:"get",
      url '/api/movies/five-recent'
    }
    $.ajax(reques)
      .done(data => this.getFiveRecentMoviesSuccess)

    return true
  }
}

export default alt.createActions(FooterActions)
