const $views = document.querySelectorAll('.view')

class HashRouter {
  constructor($views) {
    this.$views = Array.from($views)
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
      .then(() => {
        for (let i = 0; i < this.$views.length; i++) {
          if (viewId === this.$views[i].id) {
            this.$views[i].classList.remove('hidden')
          }
          else {
            this.$views[i].classList.add('hidden')
          }
        }
      })
  }
  listen() {
    if (this.isListening) {
      return
    }
    window.addEventListener('hashchange', () => {
      this.match(window.location.hash)
    })
    window.dispatchEvent(new Event('hashchange'))
    this.isListening = true
  }
}

const router = new HashRouter($views)

router.when('users', $view => {
  return fetchJSON('/users')
    .then(users => {
      const $userList = $view.querySelector('ul')
      $userList.innerHTML = ''
      users
        .map(renderUser)
        .forEach($user => $userList.appendChild($user))
    })
})

router.when('posts', $view => {
  return fetchJSON('/posts')
    .then(users => {
      const $postList = $view.querySelector('ul')
      $postList.innerHTML = ''
      users
        .map(renderPost)
        .forEach($user => $postList.appendChild($user))
    })
})

router.when('todos', $view => {
  return fetchJSON('/todos')
    .then(todos => {
      const $todoList = $view.querySelector('ul')
      $todoList.innerHTML = ''
      todos
        .map(renderTodo)
        .forEach($todo => $todoList.appendChild($todo))
    })
})

router.listen()

function fetchJSON(path) {
  const url = 'https://jsonplaceholder.typicode.com' + path
  const promise = fetch(url)
    .then(res => res.json())
  return promise
}

function renderUser(user) {
  const $user = document.createElement('li')
  $user.textContent = user.username
  return $user
}

function renderTodo(todo) {
  const $todo = document.createElement('li')
  $todo.textContent = todo.title
  return $todo
}

function renderPost(post) {
  const $post = document.createElement('li')
  $post.textContent = post.title
  return $post
}
