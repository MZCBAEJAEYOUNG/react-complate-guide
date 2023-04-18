import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        console.log('Expense.js > filterChangeHandler > selectedYear', selectedYear);
        setFilterYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        console.log(expense.date.getFullYear().toString(), '===', filterYear);
        return expense.date.getFullYear().toString() === filterYear;
    });

    let expensesContent = <p>No Expenses found.</p>;
    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;