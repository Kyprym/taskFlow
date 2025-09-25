import type { ActionType } from "../saga/saga";

export interface PostProps{
    userId?:number;
    id?:number;
    title:string;
    body:string;
}

export type PostsList = PostProps[]

const defaultState:PostsList = []


export const postsReducer = (state = defaultState, action:ActionType)=>{    

    switch (action.type) {
        case 'WRITE_POSTS_TO_STORE':
            return action.payload
        default:
            return state
    }
}