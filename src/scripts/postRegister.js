import { renderPosts } from "./render.js" 
export function registerPost(array) {
  const postTitle = document.querySelector('#title')
  const postDescription = document.querySelector('#text')
  console.log(postTitle)
  console.log(postDescription)
  //construir objeto manualmente / entradas de texto selecionadas individualmente *VER DEMO DE HOJE*
  // const newPost = {}

  // let voidInput = 0

  // textInputs.forEach(input => {
  //   if(input.value === '') {
  //     voidInput ++
  //   }

  //   newPost[input.name] = input.value
  // })

  // newPost.id = array.length + 1

  // if(voidInput !== 0){
  //   alert ('Preencha os campos necessários')
  // }

  // array.push(newPost)
}


export function eventRegister(array) {
  const postBtn = document.querySelector('#post')

  postBtn.addEventListener('click' , (event) => {
    event.preventDefault()  

    registerPost(array)
    
    renderPosts(array)
  })
} 