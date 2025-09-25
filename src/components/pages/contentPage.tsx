import { lazy, Suspense } from 'react'
import { Header } from '../header/header'
import { Hotbar } from '../hotbar/hotbar'
import { Fallback } from '../fallbacks/fallBack'
import type { RootReducer } from '../../store/reducers/rootReducer'
import { useSelector } from 'react-redux'

const TasksList = lazy(() => import("../tasksListBox/TasksList"))
const PostList = lazy(() => import("../posts/postList"))
const CommentsList = lazy(() => import('../comments/commentsList'))

interface ContentPageProps {
  openModal: () => void
}

export type ContentState = {
  tasks: boolean;
  posts: boolean;
  comments: boolean;
}

export const ContentPage = ({ openModal }: ContentPageProps) => {
  const contentState = useSelector((state: RootReducer) => state.contentReducer)
  return (
    <div>
      <Header openModal={openModal}/>
      <Hotbar /> 
        <Suspense fallback={<Fallback />}>
          {contentState.tasks && <TasksList />}
          {contentState.posts && <PostList />}
          {contentState.comments && <CommentsList />}
      </Suspense>
    </div>
  )
}