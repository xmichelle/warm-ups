var $apples = document.querySelector('#apples')
var $oranges = document.querySelector('#oranges')
var $bananas = document.querySelector('#bananas')

var images = [$apples, $oranges, $bananas]

document.addEventListener('click', function(event) {
  var dataFruit = event.target.dataset.fruit
  for (var i = 0; i < images.length; i++) {
    if (dataFruit === images[i].id) {
      images[i].classList.remove('hidden')
    } else {
      images[i].classList.add('hidden')
    }
  }
})
