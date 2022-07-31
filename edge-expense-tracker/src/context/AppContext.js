import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';


const initialState = {
	
	expenses: [
	
		{ id: uuidv4(),	name: 'Book', cost:480, date:'31-03-2002'}
	],
};


export const AppContext = createContext();


export const AppProvider = (props) => {
	
	const [state, dispatch] = useReducer(AppReducer, initialState);

	
	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};


export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
	
		default:
			return state;
	}
};
