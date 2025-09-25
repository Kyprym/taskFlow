import tasksListStyle from './taskList.module.scss'
import { Task, type TaskProps } from '../task/task'
import { useSelector } from 'react-redux'
import type { RootStateStore } from '../../store/store'
import { AddTask } from '../task/addTask/addTask'

export type Tasklist = TaskProps[]

const TasksList = () =>{
        const TaskListState:Tasklist = useSelector((store: RootStateStore) => store.tasksReducer)

        const renderedTasks = TaskListState !== undefined && TaskListState !== null
    ? TaskListState.map((task: TaskProps) => {
        const { id, userId, title, completed } = task;
        return <Task key={`task_${id}`} id={id} userId={userId} title={title} completed={completed} />;
      })
    :<></>

      
    return <div className={tasksListStyle.tasksList}>
       
        {renderedTasks}
        < AddTask/>
    </div>
}

export default TasksList