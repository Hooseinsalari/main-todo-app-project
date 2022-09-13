import React from 'react';

// components
import Todo from './common/Todo';

const TodoList = ({todos}) => {
    return (
        <div className='w-full mt-4 max-h-72 overflow-auto'>
            {
                todos.map((todo) => <Todo key={todo.id} todo={todo} />)
            }
        </div>
    );
};

export default TodoList;