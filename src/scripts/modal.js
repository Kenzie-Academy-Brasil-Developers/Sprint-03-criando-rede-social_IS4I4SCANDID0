export function createTheModal(id, array) {
  // const controlModal = document.querySelector('.modal__controller')

  const modalBox = document.createElement('section')
  modalBox.classList.add('modal__container')
  
  const closeModalBt = document.createElement('span')
  closeModalBt.innerText = 'X'
  closeModalBt.classList.add('modal__close')
  closeModalBt.id = 'closeBtn'

  const userPost = document.createElement('div')
  userPost.classList.add('item--user')

  const modalImg = document.createElement('img')

  const userInfo = document.createElement('div')

  const userName = document.createElement('h2')

  const userStack = document.createElement('p')

  const postTitle = document.createElement('h2')

  const postContent = document.createElement('p')

  const foundPost = array.find(post => post.id === Number(id))
  
  modalImg.src = foundPost.img
  modalImg.alt = foundPost.user

  userInfo.classList.add('item--userInfo')
  
  userName.innerText = foundPost.user

  userStack.innerText = foundPost.stack

  postTitle.innerText = foundPost.title

  postContent.innerText = foundPost.text

  userInfo.append(userName, userStack)

  userPost.append(modalImg, userInfo)

  modalBox.append(closeModalBt, userPost, postTitle, postContent)

  return modalBox
}


export function closeModal() {
  const modal = document.querySelector('.modal__controller')

  const closeModal = document.querySelector('#closeBtn')

  closeModal.addEventListener('click', () => {
    modal.close()
  })
}