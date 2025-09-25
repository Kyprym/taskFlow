import type { TaskProps } from "../../components/task/task"
import type { Tasklist } from "../../components/tasksListBox/TasksList"

interface WriteDataAction {
  type: 'WRITE_TASKS_TO_STORE';
  payload: Tasklist;
}

interface AddTaskAction {
  type: 'ADD_TASK_IN_TASK_LIST';
  payload: TaskProps;
}

interface ChangeTaskStateAction {
  type: 'CHANGE_TASK_STATE';
  payload: TaskProps;
}

type TaskListAction =
  | WriteDataAction
  | AddTaskAction
  | ChangeTaskStateAction;

const defaultState: Tasklist = [];

export const tasksReducer = (state = defaultState, action: TaskListAction) => {
  switch (action.type) {
    case 'WRITE_TASKS_TO_STORE':
      return action.payload;

    case 'ADD_TASK_IN_TASK_LIST':
      return [action.payload, ...state];

    case 'CHANGE_TASK_STATE':
      const { id, completed } = action.payload;
      return state.map(task =>
        task.id === id ? { ...task, completed } : task
      );

    default:
      return state;
  }
};