import React from 'react';

const TodoItem = ({ id, title, completed }) => {
	return (
		<li>
			<div>
				<span>
					<input type='checkbox' className='mr-3' checked={completed}></input>
					{title}
				</span>
				<button className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;