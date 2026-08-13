import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Complete Todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>Todo App</h1>

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodo();
              }
            }}
          />

          <button onClick={addTodo}>Add</button>
        </div>

        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="empty">No tasks yet</p>
          ) : (
            todos.map((todo) => (
              <div className="todo-item" key={todo.id}>
                <div
                  className={`todo-text ${
                    todo.completed ? "completed" : ""
                  }`}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.text}
                </div>

                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        <div className="todo-count">
          Total Tasks: {todos.length}
        </div>
      </div>
    </div>
  );
}

export default App;