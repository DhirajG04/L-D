import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);


	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li className='items'>
			<span>{props.name}</span>
			
			<span > Rs {props.cost}</span> 
			
			<span>{props.date}</span>
			
			<button  id="deleteButton" onClick={handleDeleteExpense}>DELETE</button>

		</li>
	);
};

export default ExpenseItem;