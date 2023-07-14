import { useEffect, useState } from "react";
import TaskForm from "./compenents/TaskForm";
import Tasks from "./compenents/Tasks";

import "./css/App.css";
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  }, []);

  useEffect(() => {
    if(tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    setTasks([...tasks, { name: name, done: false }]);
  };

const updateTaskDone = (taskIndex,newDone) => {
  setTasks(prev => {
    const newTasks = [...prev];
    newTasks[taskIndex].done = newDone
    return newTasks
  })
}

  return (
    <main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Tasks key={index} {...task} onToggle = {(done) =>updateTaskDone(index,done) } />
      ))}
    </main>
  );
}

export default App;
