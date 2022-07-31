import React, { useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import './ExpenseList.css';


const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	return (
		<>

			<ul>
				<div className='listOfItems'>
					{expenses.map((expense) => (
						<ExpenseItem
						    id={expense.id}
							name={expense.name}
							cost={expense.cost}
							date={expense.date}
							
						/>
						
					))}
				
				</div>
			</ul>
		</>
	);
};

export default ExpenseList;