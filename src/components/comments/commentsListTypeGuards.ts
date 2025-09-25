import type { CommentProps } from "./comment/comment"

export type CommentList = CommentProps[]

const commentTypeGuard = (obj:unknown):obj is CommentProps =>{
    return (
        typeof obj === 'object' && obj !== null &&
        'postId' in obj && typeof obj.postId === 'number' &&
        'name' in obj && typeof obj.name === 'string' && 
        'email' in obj && typeof obj.email === 'string' &&
        'body' in obj && typeof obj.body === 'string'
    )
}

export const commentListTypeGuard = (arr:unknown):arr is CommentList =>{
    return (
            Array.isArray(arr) && arr.length !==0 &&
            arr.every(commentTypeGuard)
    )
}