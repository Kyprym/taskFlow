import type { PostProps, PostsList } from "../../store/reducers/postsReduser"



const postTypeGuard = (obj:unknown):obj is PostProps =>{
    return (
        typeof obj === 'object' && obj !== null &&
        'userId' in obj && typeof obj.userId === 'number' &&
        'id' in obj && typeof obj.id === 'number' &&
        'title' in obj && typeof obj.title === 'string' &&
        'body' in obj && typeof obj.body === 'string'
    )
}

export const postsListTypeGuard = (arr:unknown):arr is PostsList =>{
        
    
    
    return (
        Array.isArray(arr) && arr.length !==0 &&
        arr.every(postTypeGuard)

    )
}