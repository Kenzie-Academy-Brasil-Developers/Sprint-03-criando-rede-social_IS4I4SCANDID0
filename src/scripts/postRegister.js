import { renderPosts } from "./render.js" 

export function registerPost(array) {
  const postTitle = document.querySelector('#title')
  const postDescription = document.querySelector('#text')

  if(postTitle.value === '' || postDescription.value === ''){

    // Toastify({

    //   text: "Por favor preencha os campos com as informações solicitadas",
    //   duration: 3000,
    //   gravity: "top",
      
    // }).showToast()
    //terminar
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
}
//Resolver o bug do post vazio 
//Fazer a função conta like 
  
export function eventRegister(array) {
  const postBtn = document.querySelector('#post')

  postBtn.addEventListener('click' , (event) => {
    event.preventDefault()  

    registerPost(array)
    
    renderPosts(array)
    // console.log(array)
  })
} 

