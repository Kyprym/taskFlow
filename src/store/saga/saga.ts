import {all, fork, put, takeEvery} from 'redux-saga/effects'
import type { Tasklist } from '../../components/tasksListBox/TasksList';
import {writeCommentsListToStorageAction, writePostListToStorageAction, writeTaskListToStorage, type AsyncActionType, type SyncActionType } from '../actions';
import type { CommentList } from '../../components/comments/commentsListTypeGuards';
import type { PostsList } from '../reducers/postsReduser';

export type ActionType = {
  type: AsyncActionType | SyncActionType;
  payload: PostsList | Tasklist | CommentList 
}


function* writeTaskListToStoreWorker(action:ActionType){
  const payload:Tasklist = yield action.payload
  yield put(writeTaskListToStorage(payload))
}

function* writeTaskListToStoreWotcher(){
  yield takeEvery('ASYNC_WRITE_TASKS_TO_STORE', writeTaskListToStoreWorker)
}

function* writePostsListToStoreWorker(action:ActionType){
  const payload:PostsList = yield action.payload
  yield put(writePostListToStorageAction(payload))
}

function* writePostsListToStoreWotcher(){
  yield takeEvery('ASYNC_WRITE_POSTS_TO_STORE', writePostsListToStoreWorker)
}

function* writeCommentsListToStoreWorker(action:ActionType){
  const payload:CommentList = yield action.payload
  yield put(writeCommentsListToStorageAction(payload))
}

function* writeCommentsListToStoreWotcher(){
  yield takeEvery('ASYNC_WRITE_COMMENTS_TO_STORE', writeCommentsListToStoreWorker)
}


export function* rootWatcher(){
  yield all([
    fork(writeTaskListToStoreWotcher),
    fork(writePostsListToStoreWotcher),
    fork(writeCommentsListToStoreWotcher)
  ])
}



