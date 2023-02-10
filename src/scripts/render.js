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
  console.log(openPost)
  const postLikes = document.createElement('i')
  postLikes.classList.add('fa-solid', 'fa-heart')
  //DEPOIS CRIAR UM addEventLIstetner PARA CURTR OS POSTS

  const countLike = document.createElement('span')
  countLike.innerText = post.likes  

  postInteract.append(openPost, postLikes, countLike)

  publications.append(userBox, postTitle, postContent, openPost, postInteract)

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