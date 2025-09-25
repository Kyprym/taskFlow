import { useState, useEffect, type JSX } from 'react';
import TaskStyle from './task.module.scss'
import CheckIcon from '../../assets/svg/circle-check.svg?react'
import CircleIcon from '../../assets/svg/circle.svg?react'
import { useDispatch } from 'react-redux';
import { changeTaskStateAction } from '../../store/actions';

export interface TaskProps{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const Task = ({ userId, id, title, completed }: TaskProps) => {
    const [complatedState, setComplatedState] = useState<boolean>(completed)
    const [titleState, setTitleState] = useState<string>(title)
    const dispatch = useDispatch()


    useEffect(() => {
        const lowTitleLength: number = 70
        if (title.length > lowTitleLength) {
            const lowTitleText: string = title.slice(0, lowTitleLength) + '...'
            setTitleState(lowTitleText)
        } else {
            setTitleState(title)
        }
    }, [title])

    const changeComplatedState = ():void => {
        const newTaskState:boolean = !complatedState 
        const newTask:TaskProps = {
            userId:userId,
            id:id,
            title:title,
            completed:newTaskState,
        }
        setComplatedState(newTaskState)
        dispatch(changeTaskStateAction(newTask))

    }


    const complatedTrue: JSX.Element = (
        <CheckIcon
            className={TaskStyle.taskComplatedStateTrue}
            onClick={changeComplatedState}
        />
    )

    const complatedFalse: JSX.Element = (
        <CircleIcon
            className={TaskStyle.taskComplatedStateFalse}
            onClick={changeComplatedState}
        />
    )

    return (
        <div className={TaskStyle.task}>
            <span>{complatedState ? complatedTrue : complatedFalse}</span>
            <span>{titleState}</span>
        </div>
    )
}