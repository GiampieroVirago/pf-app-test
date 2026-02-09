import { useState } from 'react';
import { ExpenseProvider } from './context/ExpenseContext';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { ExpenseForm } from './components/ExpenseForm';
import { Transactions, Cards, Settings } from './components/Views';
import { ChartsView } from './components/ChartsView';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'transactions':
        return <Transactions />;
      case 'cards':
        return <Cards />;
      case 'charts':
        return <ChartsView />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ExpenseProvider>
      <Layout
        onAddExpense={() => setIsFormOpen(true)}
        currentView={currentView}
        onNavigate={setCurrentView}
      >
        {renderView()}
        {isFormOpen && <ExpenseForm onClose={() => setIsFormOpen(false)} />}
      </Layout>
    </ExpenseProvider>
  );
}

export default App;
