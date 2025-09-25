import { useState } from 'react'
import AddTaskStyle from './addTask.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import type { TaskProps } from '../task'
import { addTaskInTaskListAction } from '../../../store/actions'
import type { Tasklist } from '../../tasksListBox/TasksList'
import type { RootStateStore } from '../../../store/store'

export const AddTask = ()=>{
    const [inputState, setInputState] = useState<string>('')
    const dispatch = useDispatch()
    const storeState:Tasklist = useSelector((state:RootStateStore)=> state.tasksReducer)
    const getLastTask = (arr:Tasklist, titleText:string):TaskProps =>{
            const lastElem:TaskProps = arr[0]
        
        if(titleText.length > 2){
            return {
                userId:lastElem.userId,
                id:lastElem.id + 1,
                title:titleText,
                completed:false,
            } 
        }else {

            return {
                userId:lastElem.userId,
                id:lastElem.id + 1,
                title:'empty event',
                completed:false,
            }
        }
    }



    const inputChange = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setInputState(e.target.value)
    }
    const AddTaskInStore = (task:TaskProps):void =>{
        dispatch(addTaskInTaskListAction(task))
        setInputState('')
    }


    return (
        <div className={AddTaskStyle.addTaskContainer}>
            <input 
                type='text'
                value={inputState}
                onChange={inputChange}
                />
            <button
                className={AddTaskStyle.addButton}
                onClick={()=>AddTaskInStore(getLastTask(storeState, inputState))}
                >Add</button>
        </div>
    )
}