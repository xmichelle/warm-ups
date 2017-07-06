const $views = document.querySelectorAll('.view')

class HashRouter {
  constructor($views) {
    this.$views = $views
    this.isListening = false
  }
  match(hash) {
    for (let i = 0; i < this.$views.length; i++) {
      // console.log(this.$views[i].id)
      if (hash === '#' + this.$views[i].id) {
        this.$views[i].classList.remove('hidden')
      }
      else {
        this.$views[i].classList.add('hidden')
      }
    }
  }
  listen() {
    if (this.isListening) {
      return
    }
    window.addEventListener('hashchange', () => {
      // console.log(window.location.hash)
      this.match(window.location.hash)
    })
    this.isListening = true
  }
}

const router = new HashRouter($views)
router.listen()
