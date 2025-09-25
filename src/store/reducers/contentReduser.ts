import { activeTasksContent } from "../../components/hotbar/hotbar"
import type { ContentState } from "../../components/pages/contentPage"
import type { SyncAction } from "../actions"




const defaultState:ContentState = activeTasksContent

export const contentReducer = (state = defaultState, action:SyncAction)=>{    

    switch (action.type) {
        case 'CHANGE_CONTENT_STATE_ACTION':
            return action.payload
        default:
            return state
    }
}