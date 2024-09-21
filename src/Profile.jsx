export default function Profile() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: '2023-01-15',
    projectsCompleted: 12,
    competitionsWon: 3,
    skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'PyTorch'],
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center md:text-left">Profile</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img
            src="/placeholder-user.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-600">Member since: {user.joinDate}</p>
            <p className="text-gray-600">Projects completed: {user.projectsCompleted}</p>
            <p className="text-gray-600">Competitions won: {user.competitionsWon}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  )
}
