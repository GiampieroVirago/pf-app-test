export type ExpenseType = 'expense' | 'income';

export type Category = 'Housing' | 'Transportation' | 'Food' | 'Utilities' | 'Insurance' | 'Healthcare' | 'Savings' | 'Personal' | 'Entertainment' | 'Other' | 'Salary' | 'Freelance' | 'Investments';

export interface Expense {
    id: string;
    title: string;
    amount: number;
    category: Category;
    date: string; // ISO string
    type: ExpenseType;
}

export interface ExpenseContextType {
    expenses: Expense[];
    addExpense: (expense: Omit<Expense, 'id'>) => void;
    deleteExpense: (id: string) => void;
    totalBalance: number;
    totalIncome: number;
    totalExpenses: number;
}
