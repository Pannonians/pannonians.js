import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { Todo } from "../redux/types"
import { RootState, selectTodos } from "../redux/store"
import todoSlice from '../redux/todoSlice';


const TodoList = () => {
	const todos = useSelector((state: RootState) => state);

	return (<div>
		<ul className='list-group'>
			{todos.map((todo: Todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
		</div>
	);
};

export default TodoList;

const todoList = useSelector((state: RootState) => state);
