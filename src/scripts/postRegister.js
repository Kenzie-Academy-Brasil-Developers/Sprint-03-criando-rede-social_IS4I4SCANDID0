import { renderPosts } from "./render.js" 

export function registerPost(array) {
  const postTitle = document.querySelector('#title')
  const postDescription = document.querySelector('#text')

  if(postTitle === '' || postDescription === ''){
    alert("Preencha os campos de texto corretamente, e faça uma nova tentativa")
  }

  const newPost = {
    id: array.length +1,
    title: postTitle.value,
    text: postDescription.value,
    user: "Samuel Leão",
    stack: "Front end Engineer",
    img: "./src/assets/img/user1.svg",
    likes: 17
  }

  array.push(newPost)
}

  
export function eventRegister(array) {
  const postBtn = document.querySelector('#post')

  postBtn.addEventListener('click' , (event) => {
    event.preventDefault()  

    registerPost(array)
    
    renderPosts(array)
  })
} 

