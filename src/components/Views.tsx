import { CreditCard, Bell, Shield, User } from 'lucide-react';
import { ExpenseList } from './ExpenseList';

export function Transactions() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">All Transactions</h2>
            <ExpenseList />
        </div>
    );
}

export function Cards() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">My Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Visa Card */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-xl aspect-[1.586/1] relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="flex justify-between items-start">
                            <span className="font-mono text-xs opacity-70">Debit</span>
                            <CreditCard className="w-8 h-8 opacity-80" />
                        </div>
                        <div className="font-mono text-xl tracking-widest my-4">
                            **** **** **** 4242
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="text-xs opacity-70 mb-1">Card Holder</div>
                                <div className="font-semibold tracking-wide">GIAMPIERO VIRAGO</div>
                            </div>
                            <div>
                                <div className="text-xs opacity-70 mb-1">Expires</div>
                                <div className="font-semibold">12/28</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add Card Button */}
                <button className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all aspect-[1.586/1]">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <CreditCard className="w-6 h-6" />
                    </div>
                    <span className="font-semibold">Add New Card</span>
                </button>
            </div>
        </div>
    );
}

export function Settings() {
    return (
        <div className="space-y-6 max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900">Settings</h2>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
                <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            <User className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">Profile Information</p>
                            <p className="text-sm text-gray-500">Update your account details</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                            <Bell className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">Notifications</p>
                            <p className="text-sm text-gray-500">Configure email and push alerts</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg text-green-600">
                            <Shield className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">Security</p>
                            <p className="text-sm text-gray-500">Password and authentication</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
