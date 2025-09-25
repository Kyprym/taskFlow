import { useSelector } from 'react-redux'
import postSyles from './postsList.module.scss'
import type { RootReducer } from '../../store/reducers/rootReducer'
import type { PostsList } from '../../store/reducers/postsReduser'
import { Post } from './post/post'

const PostList = () =>{
    const posts:PostsList = useSelector((state:RootReducer)=>state.postsReducer)
    
    const content = posts.map((post)=>{
                const {title, id, body} = post
                return <Post
                        key={`post_${id}`}
                        title={title}
                        body={body}
                />
            })
    
    return (
        <div className={postSyles.postListStyle}>
            {content}
        </div>
    )
}

export default PostList