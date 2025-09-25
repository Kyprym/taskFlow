import StyleSettingWindow from './settingWindow.module.scss'
import Close from '../../../assets/svg/close.svg?react'
import { useState, type JSX } from 'react'
import { useSelector } from 'react-redux'
import type { RootReducer } from '../../../store/reducers/rootReducer'
import type { Tasklist } from '../../tasksListBox/TasksList'
import { searchFragment } from '../../../supportFunc/scroll'
import { Task, type TaskProps } from '../../task/task'
import { taskTypeGuard } from '../../tasksListBox/taskListTypeGuards'

export const SettingWindow = ({close}:{close:()=>void}) =>{

    const [inputState, setInputState] = useState<string>('')
    const [alarmState, setAlarmState] = useState<boolean>(false)
    const [searchTask, setSearchTask] = useState<JSX.Element>(<></>)


    const tasksStateFromStore:Tasklist = useSelector((state:RootReducer)=>state.tasksReducer)

    const changeInput = (e:React.ChangeEvent<HTMLInputElement>):void=>{
            setInputState(e.target.value)
    }

    const onSearch = (text:string):void =>{
        if(text.length > 2){
            const resultObject =  searchFragment(text, tasksStateFromStore)

            if(taskTypeGuard(resultObject)){
                const {id, userId, title, completed } = resultObject
                const result = <Task
                                id={id}
                                userId={userId}
                                title={title}
                                completed={completed}
            />
            setAlarmState(false)
            setSearchTask(result)
            }
        }else setAlarmState(true)
    }

    return (<div className={StyleSettingWindow.modalSettingWindow}>
                <div className={StyleSettingWindow.childSettingModalWindow}>
                    <Close className={StyleSettingWindow.closeIcon} onClick={close}/>
                    
                    <div className={StyleSettingWindow.settingContainer}>
                        <span>Enter the text you want to find</span>
                         <input 
                            type='text'
                            value={inputState}
                            onChange={changeInput}
                         />
                         <div className={StyleSettingWindow.buttonContainer}>
                            <button 
                                className={StyleSettingWindow.findButton}
                                onClick={()=>{onSearch(inputState)}}
                                >Find</button>
                         </div>
                    </div>
                    {alarmState? <span className={StyleSettingWindow.errorText}> please enter more characters</span>:<></>}
                    {searchTask}
                </div>
                
            </div>)
}