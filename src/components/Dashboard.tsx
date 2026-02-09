import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { useExpenses } from '../context/ExpenseContext';
import { formatCurrency } from '../utils/format';
import { ExpenseList } from './ExpenseList';
import { ExpenseChart } from './ExpenseChart';

export function Dashboard() {
    const { totalBalance, totalIncome, totalExpenses } = useExpenses();

    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg shadow-blue-600/20">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-white/20 rounded-lg">
                            <Wallet className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-blue-100 text-sm font-medium">Total Balance</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-1">{formatCurrency(totalBalance)}</h3>
                    <p className="text-blue-200 text-sm">Available funds</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                        <span className="text-gray-500 text-sm font-medium">Income</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{formatCurrency(totalIncome)}</h3>
                    <p className="text-green-600 text-sm flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +32% <span className="text-gray-400 ml-1">vs last month</span>
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-red-100 rounded-lg">
                            <TrendingDown className="w-6 h-6 text-red-600" />
                        </div>
                        <span className="text-gray-500 text-sm font-medium">Expenses</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{formatCurrency(totalExpenses)}</h3>
                    <p className="text-red-600 text-sm flex items-center">
                        <TrendingDown className="w-4 h-4 mr-1" />
                        -5% <span className="text-gray-400 ml-1">vs last month</span>
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <ExpenseList />
                </div>
                <div>
                    <ExpenseChart />
                </div>
            </div>
        </div>
    );
}
