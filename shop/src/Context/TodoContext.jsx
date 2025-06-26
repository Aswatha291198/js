import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const addTask = (input) => {
    if (editIndex !== null) {
      const updatedTasks = tasks.map((task, idx) =>
        idx === editIndex ? input : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks(prev => [...prev, input]);
    }
    setValue('');
  };

  const deleteTask = (idx) => {
    const filtered = tasks.filter((_, i) => i !== idx);
    setTasks(filtered);
    // If deleting the one being edited, reset
    if (editIndex === idx) setEditIndex(null);
  };

  const editTask = (task, idx) => {
    setValue(task);
    setEditIndex(idx);
  };

  const cancelEdit = () => {
    setValue('');
    setEditIndex(null);
  };

  return (
    <TodoContext.Provider value={{
      value, tasks, handleValue, addTask, deleteTask,
      editTask, editIndex, cancelEdit
    }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
