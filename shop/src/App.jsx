import React from "react";
import TodoProvider from './Context/TodoContext';
import Input from "./todo/Input";

function App() {
  return (
    <TodoProvider>
      <Input />
    </TodoProvider>
  );
}

export default App;