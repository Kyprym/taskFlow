import { useSelector } from 'react-redux'
import commentsStyle from './commpentsList.module.scss'
import type { CommentList } from './commentsListTypeGuards'
import type { RootReducer } from '../../store/reducers/rootReducer'
import { Comment } from './comment/comment'

const CommentsList = () =>{
    const comments:CommentList = useSelector((state:RootReducer)=>state.commentsReducer)
    
    const content = comments.map((comment)=>{
                const {id, name, email, body} = comment
                return <Comment
                    key={`comment_${id}`}
                    id={id}
                    name={name}
                    email={email}
                    body={body}
                />
            })
    
    
    return (
        <div className={commentsStyle.commentsListStyle}>
            
            {content}
        </div>
    )
}
export default CommentsList