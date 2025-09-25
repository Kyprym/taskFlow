import { useEffect, useState } from 'react'
import { ContentPage } from './components/pages/contentPage'
import { taskListTypeGuard } from './components/tasksListBox/taskListTypeGuards'
import { asyncWriteCommentsStateAction, asyncWritePostsStateAction, asyncWriteTaskListToStorage } from './store/actions'
import { useDispatch } from 'react-redux'
import { commentListTypeGuard } from './components/comments/commentsListTypeGuards'
import { postsListTypeGuard } from './components/posts/postsTypeGuards'
import { SettingWindow } from './components/header/setting/settingWindow'


function App() {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getTaskList = async ():Promise<null | unknown> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    if(response.status === 200){
      const data = await response.json()
      if(taskListTypeGuard(data)){
        dispatch(asyncWriteTaskListToStorage(data.reverse()))
      }else
        return null
    }else return null
  }

  const geCommentsList = async ():Promise<null | unknown> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    if(response.status === 200){
      const data = await response.json()
      if(commentListTypeGuard(data)){
        dispatch(asyncWriteCommentsStateAction(data.reverse()))
      }else
        return null
    }else return null
  }

  const gePostssList = async ():Promise<null | unknown> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    if(response.status === 200){
      const data = await response.json()
      if(postsListTypeGuard(data)){
        dispatch(asyncWritePostsStateAction(data.reverse()))
      }else
        return null
    }else return null
  }

  useEffect(() => {
    getTaskList()
    geCommentsList()
    gePostssList()
  }, [])

  return (
    <div>
      <ContentPage openModal={() => setIsModalOpen(true)}/>
      
      {isModalOpen && (
        <SettingWindow close={() => setIsModalOpen(false)}/>
      )}
    </div>
  );
}

export default App;