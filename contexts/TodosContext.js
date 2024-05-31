import { createContext, useState, useEffect } from 'react';

export const TodosContext = createContext();

export function TodosProvider({ children }) {
  
  useEffect(() => {
    const initialTodos = [
      { id: 1, text: 'Project planing', description: 'Some long description about the todo, just to make sure the that the line break is good', done: false },
      { id: 2, text: 'Inspiration', description: 'Some long description about the todo, just to make sure the that the line break is good', done: false },
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
