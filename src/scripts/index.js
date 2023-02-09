// import { suggestUsers, posts } from './database;js'

function renderPosts(arrayPosts) {
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

    const userInfo = document.createElement('div')
    userInfo.classList.add('item--userInfo')

    const userName = document.createElement('h2')

    const userStack = document.createElement('p')

    userInfo.append(userName, userStack)

    userBox.append(userImg, userInfo)

    const postTitle = document.createElement('h2')
    postTitle.innerText = post.title

    const postContent = document.createElement('p')
    postContent.innerText = `${post.title.substring(0, 500)}`
    
    const postInteract = document.createElement('div')
    postInteract.classList.add('posts--interactions')

    const openPost = document.createElement('button')
    // colocar dataset
    
    const postLikes = document.createElement('i')
    postLikes.classList.add('fa-solid , fa-heart')

    // return publications
    //revisar tudo com calma e descobrir como acessar
    //o data base com import
}