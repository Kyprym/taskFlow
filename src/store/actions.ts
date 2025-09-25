import type { Tasklist } from "../components/tasksListBox/TasksList"
import type { ActionType } from "./saga/saga"
import type { TaskProps } from "../components/task/task"
import type { ContentState } from "../components/pages/contentPage"
import type { CommentList } from "../components/comments/commentsListTypeGuards"
import type { PostsList } from "./reducers/postsReduser"

export type AsyncActionType = 
|'ASYNC_WRITE_TASKS_TO_STORE'
|'ASYNC_WRITE_COMMENTS_TO_STORE'
|'ASYNC_WRITE_POSTS_TO_STORE'

export type SyncActionType = 
| 'WRITE_TASKS_TO_STORE' 
| 'WRITE_COMMENTS_TO_STORE'
| 'WRITE_POSTS_TO_STORE'
| 'ADD_TASK_IN_TASK_LIST'
| 'CHANGE_TASK_STATE'
| 'CHANGE_CONTENT_STATE_ACTION'

export type SyncAction = {
    type:SyncActionType;
    payload:TaskProps | ContentState | CommentList | PostsList
}


export const changeContentStateAction = (data:ContentState):SyncAction =>{
    return {type:"CHANGE_CONTENT_STATE_ACTION", payload:data}
}

export const asyncWriteTaskListToStorage = (data:Tasklist):ActionType =>{
    return {type:"ASYNC_WRITE_TASKS_TO_STORE", payload:data}
}
export const writeTaskListToStorage = (data:Tasklist):ActionType =>{
    return {type:"WRITE_TASKS_TO_STORE", payload:data}
}
export const addTaskInTaskListAction = (newTask: TaskProps): SyncAction =>{
  return { type: "ADD_TASK_IN_TASK_LIST", payload: newTask };
}
export const changeTaskStateAction = (state: TaskProps): SyncAction =>{
  return { type: "CHANGE_TASK_STATE", payload: state };
}

export const asyncWriteCommentsStateAction = (state: CommentList): ActionType =>{
  return { type: "ASYNC_WRITE_COMMENTS_TO_STORE", payload: state };
}
export const writeCommentsListToStorageAction = (data:CommentList):SyncAction =>{
    return {type:"WRITE_COMMENTS_TO_STORE", payload:data}
}

export const asyncWritePostsStateAction = (state: PostsList): ActionType =>{
  return { type: "ASYNC_WRITE_POSTS_TO_STORE", payload: state };
}
export const writePostListToStorageAction = (data:PostsList):SyncAction =>{
    return {type:"WRITE_POSTS_TO_STORE", payload:data}
}

