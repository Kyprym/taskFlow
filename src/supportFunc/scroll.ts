import type { TaskProps } from "../components/task/task"
import type { Tasklist } from "../components/tasksListBox/TasksList"

export const disableScroll = ():void => {
    const scrollY = window.scrollY || document.documentElement.scrollTop
        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollY}px`
        document.body.style.width = '100%'
}

export const enableScroll = ():void => {
    const scrollY = parseInt(document.body.style.top || '0', 10) * -1
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        window.scrollTo(0, scrollY)
}

export const searchFragment = (text: string, arrTasks: Tasklist): TaskProps | undefined => {
  if (!text.trim()) {
    return undefined
  }

  const lowerText = text.toLowerCase()
  return arrTasks.find(task => 
    task.title.toLowerCase().includes(lowerText)
  )
};