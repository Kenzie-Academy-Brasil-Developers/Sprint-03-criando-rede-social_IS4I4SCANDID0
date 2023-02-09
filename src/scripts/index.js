import { users, posts, suggestUsers } from './database.js'

import { eventRegister } from './postRegister.js'
  
import { modalRender, renderPosts } from './render.js'

renderPosts(posts)

modalRender(posts)

eventRegister(posts)