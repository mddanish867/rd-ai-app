export default function ProjectList() {
  const projects = [
    { id: 1, name: 'AI-driven Analytics', status: 'In Progress', completion: 65 },
    { id: 2, name: 'Smart IoT', status: 'Completed', completion: 100 },
    { id: 3, name: 'Quantum Computing Research', status: 'Planning', completion: 10 },
    { id: 4, name: 'Blockchain for Supply Chain', status: 'In Progress', completion: 40 },
  ]

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Table for larger devices */}
        <div className="hidden md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Completion</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b last:border-b-0">
                  <td className="py-4">{project.name}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      project.status === 'Completed'
                        ? 'bg-green-200 text-green-800'
                        : project.status === 'In Progress'
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-gray-200 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card layout for small devices */}
        <div className="md:hidden space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="border rounded-lg p-4 shadow">
              <h3 className="font-semibold">{project.name}</h3>
              <p>
                <strong>Status:</strong>{' '}
                <span className={`px-2 py-1 rounded-full text-sm ${
                  project.status === 'Completed'
                    ? 'bg-green-200 text-green-800'
                    : project.status === 'In Progress'
                    ? 'bg-yellow-200 text-yellow-800'
                    : 'bg-gray-200 text-gray-800'
                }`}>
                  {project.status}
                </span>
              </p>
              <p className="mt-2">
                <strong>Completion:</strong>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${project.completion}%` }}
                  ></div>
                </div>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
