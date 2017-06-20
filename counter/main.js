var $button = document.querySelector('button')
var $increment = document.querySelector('#increment')
var $decrement = document.querySelector('#decrement')
var $count = document.querySelector('#count')

var count = 0

$increment.addEventListener('click', function(event) {
    var addCount = (count += 1)
    console.log(addCount)
    $count.innerHTML = addCount
})

//
$decrement.addEventListener('click', function(event) {
  var subCount = (count -= 1)
  console.log(subCount)
  $count.innerHTML = subCount
})
