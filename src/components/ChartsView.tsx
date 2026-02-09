import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';
import { useExpenses } from '../context/ExpenseContext';
import { formatCurrency } from '../utils/format';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function ChartsView() {
    const { expenses, totalIncome, totalExpenses } = useExpenses();

    // Prepare data for Monthly Activity (Grouped by date)
    // For simplicity in this demo, we'll group by individual transaction dates
    // In a real app, you'd aggregate by month/week
    const activityData = expenses
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .map(e => ({
            date: new Date(e.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            amount: e.amount,
            type: e.type,
            income: e.type === 'income' ? e.amount : 0,
            expense: e.type === 'expense' ? e.amount : 0,
        }));

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Financial Analytics</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900">Income vs Expense</h3>
                        <div className={`flex items-center text-sm font-medium ${totalIncome > totalExpenses ? 'text-green-600' : 'text-red-600'}`}>
                            {totalIncome > totalExpenses ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                            {((Math.abs(totalIncome - totalExpenses) / (totalIncome || 1)) * 100).toFixed(1)}% margin
                        </div>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={[
                                { name: 'Income', amount: totalIncome, fill: '#10B981' },
                                { name: 'Expenses', amount: totalExpenses, fill: '#EF4444' }
                            ]}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                                <Tooltip
                                    cursor={{ fill: '#F3F4F6' }}
                                    formatter={(value: any) => [`${formatCurrency(value)}`, 'Amount'] as [string, string]}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
                                    {
                                        [{ fill: '#10B981' }, { fill: '#EF4444' }].map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))
                                    }
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Transaction Trend</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={activityData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="date" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                                <Tooltip
                                    formatter={(value: any) => [`${formatCurrency(value)}`, 'Amount'] as [string, string]}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="amount"
                                    stroke="#3B82F6"
                                    strokeWidth={3}
                                    dot={{ fill: '#3B82F6', strokeWidth: 2 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
