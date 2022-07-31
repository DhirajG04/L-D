import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import './AddExpenseForm.css';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);


	const [name, setName] = useState('');
	const [cost, setCost] = useState('');
	const [date, setDate] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			cost,
			date,
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setCost('');
		setDate('');
	};

	return (
		<form id="form" onSubmit={onSubmit}>
			<span id="expenseName">	
				<label for='name'>Expense Name</label>
				<input required='required' placeholder="Name of expense?"	type='text' value={name}
				onChange={(event) => setName(event.target.value)}
				/>
				
			</span>
			<span id="expenseAmount">
				<label for='cost'>Amount</label>
				<input required='required' placeholder="Amount?" type='number' value={cost}
				onChange={(event) => setCost(event.target.value)}
				/>

			</span>
			<span id="expenseDate">
				<label for='date'>Date</label>
				<input required='required' placeholder="dd/mm/yyyy" type='date' value={date}
				onChange={(event) => setDate(event.target.value)}
				/>

			</span>
			<br></br>
			
			<button id="btn" type='submit'> ADD </button>
				
		
		</form>
	);
};

export default AddExpenseForm;