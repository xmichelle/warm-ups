
function renderComponent() {
  var $container = document.createElement('div')

  var $mediaLeft = document.createElement('div')
  var $anchor = document.createElement('a')
  var $image = document.createElement('img')

  var $mediaBody = document.createElement('div')
  var $heading = document.createElement('h4')

  $container.classList.add('media')

  $mediaLeft.classList.add('media-left')
  $anchor.setAttribute('href', '#')
  $image.classList.add('media-object')
  $image.setAttribute('src', 'https://goo.gl/q1UPNK')
  $image.setAttribute('alt', 'Google Logo')

  $mediaBody.classList.add('media-body')
  $heading.classList.add('media-heading')

  $heading.textContent = 'Media Heading'

  $anchor.appendChild($image)
  $mediaLeft.appendChild($anchor)
  $container.appendChild($mediaLeft)

  $mediaBody.appendChild($heading)
  $container.appendChild($mediaBody)

  return $container
}

$display = document.querySelector('.display')

function displayComponent() {
  var component = renderComponent()
  $display.appendChild(component)
}

displayComponent()
