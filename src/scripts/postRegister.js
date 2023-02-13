import { renderPosts } from "./render.js" 

export function registerPost(array) {
  const postTitle = document.querySelector('#title')
  const postDescription = document.querySelector('#text')

  if(postTitle.value === '' || postDescription.value === ''){

    Toastify({
      text: 'Por favor preencha os campos com as informações solicitadas',
      duration: 3000,
      gravity: 'top',
      position: 'center',
      style: {
        background: '#EA534A',
        color: '#212529'
      }

    }).showToast()
    
    return
  }


  const newPost = {
    id: array.length +1,
    title: postTitle.value.trim(),
    text: postDescription.value.trim(),
    user: "Samuel Leão",
    stack: "Front end Engineer",
    img: "./src/assets/img/user1.svg",
    likes: 17
  }
  array.push(newPost)

  Toastify({
    text: 'Post efetuado com sucesso',
    duration: 3000,
    gravity: 'top',
    position: 'center',
    style: {
      background: '#1CF46F',
      color: '#212529'
    }

  }).showToast()

}


  
export function eventRegister(array) {
  const postBtn = document.querySelector('#post')

  postBtn.addEventListener('click' , (event) => {
    event.preventDefault()  

    registerPost(array)
    
    renderPosts(array)
  })
} 

