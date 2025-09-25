import FileIcon from '../../assets/svg/file.svg?react'
import TasksIcon from '../../assets/svg/circle-check.svg?react'
import PostsIcon from '../../assets/svg/comments.svg?react'
import HotbarSyle from './hotbar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeContentStateAction } from '../../store/actions'
import type { RootReducer } from '../../store/reducers/rootReducer'

export type ContentState = {
    tasks:boolean; posts:boolean; comments:boolean
}

export const activeTasksContent:ContentState = {tasks:true, posts:false, comments:false}
const activePostsContent:ContentState = {tasks:false, posts:true, comments:false}
const activeCommentsContent:ContentState = {tasks:false, posts:false, comments:true}

export const Hotbar = () =>{
    const dispatch = useDispatch() 
    const isconState:ContentState = useSelector((state:RootReducer)=>state.contentReducer)

    const activeContentList = (contentState:ContentState):void=>{
        dispatch(changeContentStateAction(contentState))
    }
    

    return <div className={HotbarSyle.hotbar}>
                <FileIcon  
                    onClick={()=>activeContentList(activePostsContent)}
                    className={!isconState.posts?HotbarSyle.hotbarIcon : HotbarSyle.hotbarIconActive }/>
                <TasksIcon 
                    onClick={()=>activeContentList(activeTasksContent)} 
                    className={!isconState.tasks ?HotbarSyle.hotbarIcon : HotbarSyle.hotbarIconActive}/>
                <PostsIcon 
                    onClick={()=>activeContentList(activeCommentsContent)} 
                    className={!isconState.comments ?HotbarSyle.hotbarIcon : HotbarSyle.hotbarIconActive}/>
            </div>
    
}