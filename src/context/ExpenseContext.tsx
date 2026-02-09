import { createContext, useContext, type ReactNode } from 'react';
import type { Expense, ExpenseContextType } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export function ExpenseProvider({ children }: { children: ReactNode }) {
    const [expenses, setExpenses] = useLocalStorage<Expense[]>('expenses', []);

    const addExpense = (expenseData: Omit<Expense, 'id'>) => {
        const newExpense: Expense = {
            ...expenseData,
            id: crypto.randomUUID(),
        };
        setExpenses([...expenses, newExpense]);
    };

    const deleteExpense = (id: string) => {
        setExpenses(expenses.filter((e: Expense) => e.id !== id));
    };

    const totalIncome = expenses
        .filter((e: Expense) => e.type === 'income')
        .reduce((acc: number, curr: Expense) => acc + curr.amount, 0);

    const totalExpenses = expenses
        .filter((e: Expense) => e.type === 'expense')
        .reduce((acc: number, curr: Expense) => acc + curr.amount, 0);

    const totalBalance = totalIncome - totalExpenses;

    return (
        <ExpenseContext.Provider
            value={{
                expenses,
                addExpense,
                deleteExpense,
                totalBalance,
                totalIncome,
                totalExpenses,
            }}
        >
            {children}
        </ExpenseContext.Provider>
    );
}

export function useExpenses() {
    const context = useContext(ExpenseContext);
    if (context === undefined) {
        throw new Error('useExpenses must be used within an ExpenseProvider');
    }
    return context;
}
