import data from './posts.json'
const posts=data.posts
export const routes=[
        posts.map(post=>
            {path:{post.slug}},
        )
        
    ]