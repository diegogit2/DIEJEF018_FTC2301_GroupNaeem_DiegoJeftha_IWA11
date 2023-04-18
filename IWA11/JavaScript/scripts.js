// script.js

const order1 = document.querySelector('[data-key="order1"]')
const order1Biscuits = order1.querySelector('.biscuits .count')
const order1Donuts = order1.querySelector('.donuts .count')
const order1Pancakes = order1.querySelector('.pancakes .count')
const order1Status = order1.querySelector('.status')

order1Biscuits.textContent = order1.dataset.biscuits
order1Donuts.textContent = order1.dataset.donuts
order1Pancakes.textContent = order1.dataset.pancakes
order1Status.textContent = order1.status = "false" ? 'Delivered' : 'Pending'

// const order2 = document.querySelector('[data-key="order2"]')
// const order2Biscuits = order2.querySelector('.biscuits .count')
// const order2Donuts = order2.querySelector('.donuts .count')
// const order2Pancakes = order2.querySelector('.pancakes .count')
// const order2Status = order2.querySelector('.status')

// order2Biscuits.textContent = order2.dataset.biscuits
// order2Donuts.textContent = order2.dataset.donuts
// order2Pancakes.textContent = order2.dataset.pancakes
// order2Status.textContent = order2.status = "true" ? 'Delivered' : 'Pending'

// const order3 = document.querySelector('[data-key="order3"]')
// const order3Biscuits = order3.querySelector('.biscuits .count')
// const order3Donuts = order3.querySelector('.donuts .count')
// const order3Pancakes = order3.querySelector('.pancakes .count')
// const order3Status = order3.querySelector('.status')

// order3Biscuits.textContent = order3.dataset.biscuits
// order3Donuts.textContent = order3.dataset.donuts
// order3Pancakes.textContent = order3.dataset.pancakes
// order3Status.textContent = order3.status = "true" ? 'Delivered' : 'Pending'

