
const $panels = document.querySelector('#panels')
const $div1 = document.querySelector('[data-id="1"]')

const $panelBody1 = document.querySelector('.panel-body')
const $parentEl1 = $panelBody1.closest('[data-id="1"]')
console.log($parentEl1)


$panels.addEventListener('click', (event) => {

  // console.log($divs.id)
  console.log(event.target)
  // for (let i = 0; i < $divs.length; i++) {
  //   if ($divs[0].id === 1){
  //     console.log($divs[0].id)
  //   }
  // }

  // console.log(event.target.dataset.id)
  // const targetId = event.target.dataset.id
  // if (targetId === 1) {
  //   console.log(targetId)
  // }
})

// $panels.addEventListener('click', (event) => {
//   const panelId = event.target.dataset.id
// })

// $panels.forEach((panel) => {
//   panel.addEventListener('click', (event) => {
//
//     console.log(event.target)
//   })
// })
//
// const panelId = event.target.dataset.id
