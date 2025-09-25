import type { TaskProps } from "../task/task"
import type { Tasklist } from "./TasksList"



export const taskTypeGuard = (obj:unknown):obj is TaskProps =>{
    return (
        typeof obj === 'object' && obj !== null &&
        'userId' in obj && typeof obj.userId === 'number' &&
        'id' in obj && typeof obj.id === 'number' &&
        'title' in obj && typeof obj.title === 'string' &&
        'completed' in obj && typeof obj.completed === 'boolean'
    )
}

export const taskListTypeGuard = (arr:unknown):arr is Tasklist =>{
    return (
            Array.isArray(arr) && arr.length !==0 &&
            arr.every(taskTypeGuard)
    )
}