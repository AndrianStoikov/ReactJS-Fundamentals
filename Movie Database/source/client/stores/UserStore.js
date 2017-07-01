import UserActions from '../actions/UserActions'
import alt from '../alt'

class UserStore {
  constructor () {
    this.bindActions(UserActions)

    this.loggedInUserId = ''
  }

  onLoginUserSuccess (userId) {
    this.loggedInUserId = userId
  }

  onLoginUserFail () {
    console.log('Failed loggin attempt')
  }

  onLogoutUserSuccess () {
    this.loggedInUserId = ''
  }
}

export default alt.createStore(UserStore)
