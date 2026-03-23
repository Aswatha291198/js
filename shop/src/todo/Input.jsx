import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

function Input() {

  const {
    value,
    tasks,
    handleValue,
    addTask,
    deleteTask,
    editTask,
    editIndex,
    cancelEdit
  } = useContext(TodoContext);

  return (
    <div>
      <h2>Todo App</h2>

      <input
        value={value}
        onChange={handleValue}
        placeholder="Enter task"
      />

      <button onClick={() => addTask(value)}>
       Add
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}

            <button onClick={() => editTask(task, index)}>
              Edit
            </button>

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>

            {editIndex === index && (
              <button onClick={cancelEdit}>
                Cancel
              </button>
            )}

          </li>
        ))}
      </ul>

    </div>
  );
}

export default Input;