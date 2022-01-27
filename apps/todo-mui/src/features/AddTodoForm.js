import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice"
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch()

	const onSubmit = (event) => {
		event.preventDefault();
		console.log('user entered: ' + value);
		dispatch(addTodo({
			title: value,
		}))
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			
			<TextField
				type='text'
				
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></TextField>

			<Button type='submit' >
				Submit
			</Button>
		</form>
	);
};

export default AddTodoForm;