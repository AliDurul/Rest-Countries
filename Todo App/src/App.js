import { useState } from "react";
import TaskForm from "./compenents/TaskForm";
import Tasks from "./compenents/Tasks";

import "./css/App.css";
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    setTasks([...tasks, { name: name, done: false }]);
  };

  return (
    <main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task) => (
        <Tasks {...task} />
      ))}
    </main>
  );
}

export default App;
