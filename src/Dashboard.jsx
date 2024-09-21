export default function Dashboard() {
    const stats = [
      { name: 'Active Projects', value: 12 },
      { name: 'Team Members', value: 24 },
      { name: 'Tasks Completed', value: 187 },
      { name: 'AI Insights Generated', value: 42 },
    ]
  
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{stat.name}</h3>
              <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">📝</span>
              <span>New project "AI-driven Analytics" created</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">🚀</span>
              <span>Project "Smart IoT" completed</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">👥</span>
              <span>3 new team members joined</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }