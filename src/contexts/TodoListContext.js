import React, { createContext, useReducer } from 'react';
import { todosReducer } from '../reducers/todosReducer';

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todosReducer, [
        { text: 'Do activity 1', id: '1' },
        { text: 'Do activity 2', id: '2' },
        { text: 'Do activity 3', id: '3' }
    ])

    return (
        <TodoListContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoListContext.Provider>
    );
}

export default TodoListContextProvider;