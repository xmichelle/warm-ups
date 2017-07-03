
function createElement(tagName, attributes, children) {
  const $container = document.createElement(tagName)

  for (const property in attributes) {
  $container.setAttribute(property, attributes[property])
  }

  children.forEach(child => {
    if (child instanceof HTMLElement) {
      $container.appendChild(child)
    }
    else {
      const $child = document.createTextNode(child)
      $container.appendChild($child)
    }
  })
  return $container
}

const posts = [
  {
    title: 'The Law of Leaky Abstractions',
    author: 'Joel Spolsky',
    content: 'Lorem ipsum dolor sit amet...'
  },
  {
    title: 'Higher Order Functions (Composing Software)',
    author: 'Eric Elliot',
    content: 'Lorem ipsum dolor sit amet...'
  },
  {
    title: 'A Little About Patterns.',
    author: 'Robert C. Martin',
    content: 'Lorem ipsum dolor sit amet...'
  }
]

function renderPost(post) {
  const { title, author, content } = post
  const $post =
    createElement('div', {}, [
      createElement('h2', {}, [title]),
      createElement('h5', {}, [author]),
      createElement('p', {}, [content])
    ])
  return $post
}

posts
  .map(renderPost)
  .forEach($post => document.body.appendChild($post))
