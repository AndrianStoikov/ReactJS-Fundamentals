improt alt from '../alt'
import NavbarActions from '../stores/NavbarActions'

class NavbarStore {
  constructor() {
    this.bindActions(NavbarActions)

    this.ajaxAnimationClass = ''
  }

  onUpdateAjaxAnimation(animationClass) {
    this.ajaxAnimatioClass = animationClass
  }
}

export default alt.createStore(NavbarStore)
