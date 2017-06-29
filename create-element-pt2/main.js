
function createElement(tagName, attributes, children) {
  const $el = document.createElement(tagName)

  for (const property in attributes) {
    $el.setAttribute(property, attributes[property])
  }

  children.forEach(child => $el.appendChild(child))
  return $el
}

const $element =
  createElement('ul', { class: 'ui list' }, [
    createElement('li', { class: 'item', 'data-id': 1 }, []),
    createElement('li', { class: 'item', 'data-id': 2 }, []),
    createElement('li', { class: 'item', 'data-id': 3 }, [])
  ])

console.log($element)
