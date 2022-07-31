import React from 'react';
import './App.css';
import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';



const App = () => {
	return (
		<AppProvider className="main">
			
			<h1>EDGE EXPENSE TRACKER</h1>
			
				
			<AddExpenseForm />

			<ExpenseList />

		</AppProvider>
	);
};

export default App;