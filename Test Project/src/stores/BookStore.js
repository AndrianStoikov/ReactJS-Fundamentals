import alt from '../alt'
import BookActions from '../actions/BookActions'

class BookStores {
  constructor () {
    this.bindActions(BookActions)

    this.books = []
  }
}