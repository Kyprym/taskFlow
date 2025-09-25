import { combineReducers } from "@reduxjs/toolkit";
import { postsReducer, type PostList} from "./postsReduser";
import { tasksReducer } from "./tasksReduser";
import { contentReducer } from "./contentReduser";
import type { Tasklist } from "../../components/tasksListBox/TasksList";
import type { ContentState } from "../../components/pages/contentPage";
import type { CommentsReducer } from "./commentsReduser";
import commentsReducer from "./commentsReduser";

export type RootReducer = {
    tasksReducer:Tasklist;
    postsReducer:PostList;
    commentsReducer:CommentsReducer;
    contentReducer:ContentState;
}


export const rootReducer = combineReducers({
    tasksReducer,
    postsReducer,
    commentsReducer,
    contentReducer

})