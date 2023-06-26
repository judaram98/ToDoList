import { useState } from "react";
import { Header } from "./components/Header/index";
import { Tasks } from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
    console.log(tasks);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = task.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onComplete={toggleTaskCompletedById} />
    </>
  );
}

export default App;
