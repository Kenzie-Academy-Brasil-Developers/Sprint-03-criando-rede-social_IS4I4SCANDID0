import { closeModal, createTheModal } from './modal.js'

export function renderPosts(arrayPosts) {
  const controllerContent = document.querySelector('.content__controller')

  const ulPosts = document.querySelector('.container__posts')

  arrayPosts.forEach(post => {

    const publication = createPosts(post)
  
    ulPosts.appendChild(publication)
  })
  
  controllerContent.appendChild(ulPosts)  
}
  



function createPosts(post) {
  
  const publications = document.createElement('li')
  publications.classList.add('posts--item')

  const userBox = document.createElement('div')
  userBox.classList.add('item--user')

  const userImg = document.createElement('img')
  userImg.src = post.img
  userImg.alt = post.user

  const userInfo = document.createElement('div')
  userInfo.classList.add('item--userInfo')

  const userName = document.createElement('h2')
  userName.innerText = post.user

  const userStack = document.createElement('p')
  userStack.innerText = post.stack

  userInfo.append(userName, userStack)

  userBox.append(userImg, userInfo)

  const postTitle = document.createElement('h2')
  postTitle.innerText = post.title

  const postContent = document.createElement('p')
  postContent.innerText = `${post.title.substring(0, 190)+'...'+'  '+ ' Leia mais clicando abaixo'}`
  
  const postInteract = document.createElement('div')
  postInteract.classList.add('posts--interactions')
  
  const openPost = document.createElement('button')
  openPost.innerText = 'Abrir post'
  openPost.classList.add('openBtn')
  openPost.dataset.postId = post.id
  
  const postLikes = document.createElement('i')
  postLikes.classList.add('fas', 'fa-heart')
  postLikes.dataset.likeId = post.id

  const countLike = document.createElement('span')
  countLike.innerText = post.likes  
  
  postInteract.append(openPost, postLikes, countLike)
  
  publications.append(userBox, postTitle, postContent, postInteract)

  return publications
}

export function modalRender(array) {
  const modalControl = document.querySelector('.modal__controller')

  const buttons = document.querySelectorAll('.openBtn')

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const contentModal = createTheModal(button.dataset.postId, array)
      
      modalControl.innerHTML = ''

      modalControl.appendChild(contentModal)
      
      modalControl.showModal()
      
      closeModal()
    })
  })
}
      



export function renderSuggestions(arraySuggestions) {
  
  const mainSection = document.querySelector('.container')
  const divController = document.querySelector('.suggestions__container')
  const listUsers = document.querySelector('.sugestions__list')
  
  arraySuggestions.forEach(suggestion => {
    const users = createSuggestions(suggestion)
    
    listUsers.appendChild(users)
    
  })
  
  divController.appendChild(listUsers)

  mainSection.appendChild(divController)
}
  

function createSuggestions(suggestion) {
  
  const list = document.createElement('li')
  list.classList.add('list--users')

  const divPresentation = document.createElement('div')
  divPresentation.classList.add('user__presentation')

  const image = document.createElement('img')
  image.src = suggestion.img
  image.alt = suggestion.user

  const divInfoUser = document.createElement('div')
  divInfoUser.classList.add('presentation--info')

  const name = document.createElement('h2')
  name.innerText = suggestion.user

  const stack = document.createElement('p')
  stack.innerText = suggestion.stack

  divInfoUser.append(name, stack)
  
  const followBtn = document.createElement('button')
  followBtn.classList.add('users--following')
  followBtn.innerText = 'Seguindo'
  
  divPresentation.append(image, divInfoUser)

  list.append(divPresentation,followBtn)

  return list
}