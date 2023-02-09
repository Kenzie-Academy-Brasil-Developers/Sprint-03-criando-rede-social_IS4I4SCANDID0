export function renderPosts(arrayPosts) {
  const ulPosts = document.querySelector('ul')
  ulPosts.classList.add('container__posts')

  ulPosts.innerHTML = ''

  arrayPosts.forEach(post => {

    const publication = createPosts(post)

    ulPosts.appendChild(publication)
  })
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
  postContent.innerText = `${post.title.substring(0, 190) + ' ' + '...Leia mais clicando abaixo'}`

  const postInteract = document.createElement('div')
  postInteract.classList.add('posts--interactions')
  
  const openPost = document.createElement('button')
  // colocar dataset
  
  const postLikes = document.createElement('i')
  postLikes.classList.add('fa-solid , fa-heart')
  //DEPOIS CRIAR UM addEventLIstetner PARA CURTR OS POSTS

  const countLike = document.createElement('span')
  countLike.innerText = post.likes  

  postInteract.append(openPost, postLikes, countLike)

  publications.append(userBox, postTitle, postContent, openPost, postInteract)

  return publications
  //revisar tudo com calma e descobrir como acessar o data base com import
}