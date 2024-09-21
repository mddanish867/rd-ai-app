import { useState } from 'react';
import Dashboard from './Dashboard';
import AIAssistant from './AIAssistant';
import ProjectList from './ProjectList';
import Datasets from './Datasets';
import Competitions from './Competitions';
import Learning from './Learning';
import Profile from './Profile';

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'projects', name: 'Projects', icon: '📁' },
    { id: 'ai', name: 'AI Assistant', icon: '🤖' },
    { id: 'datasets', name: 'Datasets', icon: '📊' },
    { id: 'competitions', name: 'Competitions', icon: '🏆' },
    { id: 'learning', name: 'Learning', icon: '📚' },
    { id: 'profile', name: 'Profile', icon: '👤' },
  ];

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'projects':
        return <ProjectList />;
      case 'ai':
        return <AIAssistant />;
      case 'datasets':
        return <Datasets />;
      case 'competitions':
        return <Competitions />;
      case 'learning':
        return <Learning />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <aside className="bg-gray-800 text-white w-52 p-6">
        <nav>
          <ul className="space-y-2">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`w-full text-left py-2 px-4 rounded ${
                    activeTab === tab.id ? 'bg-indigo-600' : 'hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {renderActiveTab()}
      </main>
    </>
  );
}
