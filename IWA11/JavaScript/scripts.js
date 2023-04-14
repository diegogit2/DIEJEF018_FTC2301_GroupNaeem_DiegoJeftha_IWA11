// script.js

const root1 = document.querySelector('[data-key="order1"]')
const order1Biscuits = root1.querySelector('.biscuits .count')
const order1Donuts = root1.querySelector('.donuts .count')
const order1Pancakes = root1.querySelector('.pancakes .count')
const order1Status = root1.querySelector('.status')

const root2 = document.querySelector('[data-key="order2"]')
const order2Biscuits = root2.querySelector('.biscuits .count')
const order2Donuts = root2.querySelector('.donuts .count')
const order2Pancakes = root2.querySelector('.pancakes .count')
const order2Status = root2.querySelector('.status')

const root3 = document.querySelector('[data-key="order3"]')
const order3Biscuits = root3.querySelector('.biscuits .count')
const order3Donuts = root3.querySelector('.donuts .count')
const order3Pancakes = root3.querySelector('.pancakes .count')
const order3Status = root3.querySelector('.status')

order1Biscuits.textContent = root1.dataset.biscuits
order1Donuts.textContent = root1.dataset.donuts
order1Pancakes.textContent = root1.dataset.pancakes
order1Status.textContent = root1.status = "true" ? 'Delivered' : 'Pending'


order2Biscuits.textContent = root2.dataset.biscuits
order2Donuts.textContent = root2.dataset.donuts
order2Pancakes.textContent = root2.dataset.pancakes
order2Status.textContent = root2.status = "true" ? 'Delivered' : 'Pending'

order3Biscuits.textContent = root3.dataset.biscuits
order3Donuts.textContent = root3.dataset.donuts
order3Pancakes.textContent = root3.dataset.pancakes
order3Status.textContent = root3.status = "true" ? 'Delivered' : 'Pending'

