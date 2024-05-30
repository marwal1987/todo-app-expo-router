import { createContext, useState, useEffect } from 'react';

export const TodosContext = createContext();

export function TodosProvider({ children }) {
  
  useEffect(() => {
    // Sätt initiala todo-uppgifter när appen startar
    const initialTodos = [
      { id: 1, text: 'Clean', description: 'Some long description about the todo, just to make sure the that the line break is good', done: false },
      { id: 2, text: 'Laundry', description: 'Some long description about the todo, just to make sure the that the line break is good', done: false },
      { id: 3, text: 'Lunch meeting', description: 'Some long description about the todo, just to make sure the that the line break is good', done: true },
    ];
    setTodos(initialTodos);
  }, []);

  const [todos, setTodos] = useState([

  ]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}
