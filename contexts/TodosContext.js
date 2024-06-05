import { createContext, useState, useEffect } from "react";

export const TodosContext = createContext();

export function TodosProvider({ children }) {
  useEffect(() => {
    const initialTodos = [
      {
        id: 1,
        text: "Project planing",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        done: false,
      },
      {
        id: 2,
        text: "Inspiration",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        done: true,
      },
      {
        id: 3,
        text: "Walk the dog",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        done: true,
      },
    ];
    setTodos(initialTodos);
  }, []);

  const [todos, setTodos] = useState([]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}
