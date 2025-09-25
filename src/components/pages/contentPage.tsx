import { lazy, Suspense } from "react";
import { Header } from "../header/header";
import { Fallback } from "../fallbacks/fallBack";
import { Hotbar } from "../hotbar/hotbar";
import { useSelector } from "react-redux";
import type { RootReducer } from "../../store/reducers/rootReducer";

const TasksList = lazy(() => import("../tasksListBox/TasksList"))
const PostList = lazy(() => import("../posts/postList"))
const CommentsList = lazy(() => import('../comments/commentsList'))

export type ContentState = {
  tasks: boolean;
  posts: boolean;
  comments: boolean;
}

export const ContentPage = () => {
  const contentState = useSelector((state: RootReducer) => state.contentReducer)

  return (
    <div>
      <Header />
      <Suspense fallback={<Fallback />}>
        {contentState.tasks && <TasksList />}
        {contentState.posts && <PostList />}
        {contentState.comments && <CommentsList />}
      </Suspense>
      <Hotbar />
    </div>
  )
}