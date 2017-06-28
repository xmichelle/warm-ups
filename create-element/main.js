
function createElement(tagName, attributes, content) {
  const $element = document.createElement(tagName)
  for (var property in attributes) {
    $element.setAttribute(property, attributes[property])
  }
  $element.textContent = content
  return $element
}

const $heading = createElement('h1', { class: 'main-header' }, 'Hello World!')

document.body.appendChild($heading)
