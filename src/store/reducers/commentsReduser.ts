import type { ActionType } from "../saga/saga"

export type CommentsReducer = []




const defaultState:CommentsReducer = []

const commentsReducer = (state = defaultState, action:ActionType)=>{    

    switch (action.type) {
        case 'WRITE_COMMENTS_TO_STORE':
            return action.payload
        default:
            return state
    }
}
export default commentsReducer