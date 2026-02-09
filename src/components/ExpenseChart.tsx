import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useExpenses } from '../context/ExpenseContext';
import { formatCurrency } from '../utils/format';
import type { Expense } from '../types';

const COLORS = [
    '#3B82F6', '#10B981', '#F59E0B', '#EF4444',
    '#8B5CF6', '#EC4899', '#6366F1', '#14B8A6'
];

export function ExpenseChart() {
    const { expenses } = useExpenses();

    const expenseData = expenses.filter(e => e.type === 'expense');

    // Group by category
    const data = Object.values(
        expenseData.reduce((acc: { [key: string]: { name: string, value: number } }, curr: Expense) => {
            if (!acc[curr.category]) {
                acc[curr.category] = { name: curr.category, value: 0 };
            }
            acc[curr.category].value += curr.amount;
            return acc;
        }, {})
    );

    if (expenseData.length === 0) {
        return null;
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Spending by Category</h3>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value: number | undefined) => [value != null ? formatCurrency(value) : '$0.00', 'Amount']}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
