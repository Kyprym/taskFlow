import { useState, useEffect} from 'react';
import { Fallback } from './components/fallbacks/fallBack';
import { ContentPage } from './components/pages/contentPage';
import { taskListTypeGuard } from './components/tasksListBox/taskListTypeGuards';
import { asyncWriteCommentsStateAction, asyncWritePostsStateAction, asyncWriteTaskListToStorage } from './store/actions';
import { useDispatch } from 'react-redux';
import { commentListTypeGuard } from './components/comments/commentsListTypeGuards';
import { postsListTypeGuard } from './components/posts/postsTypeGuards';


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dispatch = useDispatch()

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

  useEffect(() => { // на пк версии стоит заглушка, нужнг будет отладить
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
      getTaskList()
      geCommentsList()
      gePostssList()
  }, [])



  return (
    <div>
      {isMobile ?   
       <ContentPage/>
        : <Fallback/>} 
    </div>
  );
}

export default App;