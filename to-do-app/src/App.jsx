import AppName from "./components/AppName"
import AppToDo from "./components/AddToDo"
import './App.css'
import ToDoItems from "./components/ToDoItems";

function App() {

  const todoItems = [
    {
      name: 'Buy Milk',
      dueDate: '4/10/23'
    },
    {
      name: 'Go to College',
      dueDate: '4/10/23'
    },
    {
      name: 'Go to Gym',
      dueDate: '4/10/23'
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AppToDo />
      <ToDoItems todoItems={todoItems} />

    </center>
  )
}

export default App
