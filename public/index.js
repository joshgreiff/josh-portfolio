const burger = document.getElementById('burger')
const menu = document.getElementById('ul')
const x = document.getElementById('x')
const mobileMenu = document.getElementById('mobile-menu')

burger.addEventListener('click', () => {

    mobileMenu.classList.remove('hidden')
  

    burger.classList.add('hidden')
    x.classList.remove('hidden')

})

x.addEventListener('click', () => {
    x.classList.add('hidden')
    menu.classList.add('hidden')
    mobileMenu.classList.add('hidden')
    burger.classList.remove('hidden')

})

const firstNameInput = document.getElementById('first')
const lastNameInput = document.getElementById('last')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')


function validateForm(){

}
