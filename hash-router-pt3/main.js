const $views = document.querySelectorAll('.view')

class HashRouter {
  constructor($views) {
    this.$views = Array.from($views)
    // console.log($views)
    this.handlers = {}
    this.isListening = false
  }

  when(hash, handler) {
    this.handlers[hash] = handler
  }

  match(hash) {
    const viewId = hash.replace('#', '')
    const $view = this.$views.find($view => {
      return $view.id === viewId
    })
    const handler = this.handlers[viewId]
    handler($view)
    for (let i = 0; i < this.$views.length; i++) {
      if (viewId === this.$views[i].id) {
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
      this.match(window.location.hash)
    })
    this.isListening = true
  }
}

const router = new HashRouter($views)

router.when('home', $view => {
  const time = new Date().toUTCString()
  const $message = document.createElement('p')
  const $time = document.createElement('p')
  $message.textContent = 'Welcome to the home page!'
  $time.textContent = 'The current time is ' + time
  $view.innerHTML = ''
  $view.appendChild($message)
  $view.appendChild($time)
})

router.when('about', $view => {
  $view.textContent = 'About Us'
})

router.when('contact', $view => {
  $view.textContent = 'Contact Us'
})

router.listen()
