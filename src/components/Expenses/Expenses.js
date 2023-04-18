import React, {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

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

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;