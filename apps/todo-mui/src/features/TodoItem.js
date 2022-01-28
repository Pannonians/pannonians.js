import React from "react";
import { useDispatch } from "react-redux";
import { toggleCompleted, deleteTodo } from "./todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleComplete = (todos) => {
	dispatch(toggleCompleted({ id: todos.id, completed: !completed }));
  };

  const handleDelete = () => {
	dispatch(deleteTodo({ id }));
  };


  return (
	<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						checked={completed}
						onClick={handleComplete}
					></input>
				{title}
			</span>
			<button onClick={handleDelete} className='btn btn-danger'>
				Delete
			</button>
		</div>
	</li>
);
};

export default TodoItem;