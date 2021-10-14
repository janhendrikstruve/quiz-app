console.clear()


const homeSection = getElement('home-section')
const bookmarkSection = getElement('bookmark-section')
const createSection = getElement('create-section')
const profileSection = getElement('profile-section')

const homeButton = getElement('home-button')
const bookmarkButton = getElement('bookmark-button')
const createButton = getElement('create-button')
const profileButton = getElement('profile-button')


homeButton.addEventListener('click', () => {
  homeSection.classList.remove('hidden')
  bookmarkSection.classList.add('hidden')
  createSection.classList.add('hidden')
  profileSection.classList.add('hidden')

  homeButton.classList.add('nav__list-item--active')
  bookmarkButton.classList.remove('nav__list-item--active')
  createButton.classList.remove('nav__list-item--active')
  profileButton.classList.remove('nav__list-item--active')

})

bookmarkButton.addEventListener('click', () => {
  homeSection.classList.add('hidden')
  bookmarkSection.classList.remove('hidden')
  createSection.classList.add('hidden')
  profileSection.classList.add('hidden')

  homeButton.classList.remove('nav__list-item--active')
  bookmarkButton.classList.add('nav__list-item--active')
  createButton.classList.remove('nav__list-item--active')
  profileButton.classList.remove('nav__list-item--active')
})

createButton.addEventListener('click', () => {
  homeSection.classList.add('hidden')
  bookmarkSection.classList.add('hidden')
  createSection.classList.remove('hidden')
  profileSection.classList.add('hidden')

  homeButton.classList.remove('nav__list-item--active')
  bookmarkButton.classList.remove('nav__list-item--active')
  createButton.classList.add('nav__list-item--active')
  profileButton.classList.remove('nav__list-item--active')
})

profileButton.addEventListener('click', () => {
  homeSection.classList.add('hidden')
  bookmarkSection.classList.add('hidden')
  createSection.classList.add('hidden')
  profileSection.classList.remove('hidden') 
  
  homeButton.classList.remove('nav__list-item--active')
  bookmarkButton.classList.remove('nav__list-item--active')
  createButton.classList.remove('nav__list-item--active')
  profileButton.classList.add('nav__list-item--active')
})


function getAllElements(dataJs, target = document){
  return target.querySelectorAll('[data-js=' + dataJs + ']')
}

function getElement(dataJs, target = document){
  return target.querySelector('[data-js=' + dataJs + ']')
}
