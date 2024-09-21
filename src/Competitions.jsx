export default function Competitions() {
    const competitions = [
      { id: 1, name: 'Image Classification Challenge', participants: 1500, prize: '$50,000', deadline: '2023-08-31' },
      { id: 2, name: 'Natural Language Processing Task', participants: 800, prize: '$30,000', deadline: '2023-09-15' },
      { id: 3, name: 'Time Series Forecasting', participants: 1200, prize: '$40,000', deadline: '2023-10-01' },
      { id: 4, name: 'Reinforcement Learning Challenge', participants: 600, prize: '$25,000', deadline: '2023-09-30' },
    ]
  
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Competitions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitions.map((competition) => (
            <div key={competition.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{competition.name}</h3>
              <p className="text-gray-600 mb-4">Prize: {competition.prize}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">
                  Participants: {competition.participants}
                </span>
                <span className="text-sm text-gray-500">
                  Deadline: {competition.deadline}
                </span>
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                Join Competition
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }