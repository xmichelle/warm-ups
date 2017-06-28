var $p = document.querySelector('p')

function setAttributes(element, attributes) {
  for (var property in attributes) {
    element.setAttribute(property, attributes[property])
  }
}

setAttributes($p, { class: 'red', id: 'name' })
