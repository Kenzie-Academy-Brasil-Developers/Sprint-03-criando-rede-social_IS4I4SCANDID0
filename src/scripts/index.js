import { posts, suggestUsers } from './database.js'

import { eventRegister } from './postRegister.js'
  
import { modalRender, renderPosts, renderSuggestions } from './render.js'

renderPosts(posts)

modalRender(posts)

eventRegister(posts)

renderSuggestions(suggestUsers)

