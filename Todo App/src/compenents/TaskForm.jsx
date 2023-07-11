import { useState } from "react"

const TaskForm = () => {
  
  const [taskName, setTaskName] = useState("")
    return (
    <form>
        <button>+</button>
        <input type="text" placeholder="Your Next task.." onChange={e => setTaskName(e.target.value)} value={taskName}/>
    </form>
  )
}

export default TaskForm