export default function Learning() {
    const courses = [
      { id: 1, name: 'Introduction to Machine Learning', duration: '4 weeks', level: 'Beginner' },
      { id: 2, name: 'Deep Learning Specialization', duration: '12 weeks', level: 'Intermediate' },
      { id: 3, name: 'Natural Language Processing', duration: '6 weeks', level: 'Advanced' },
      { id: 4, name: 'Computer Vision Fundamentals', duration: '8 weeks', level: 'Intermediate' },
    ]
  
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
              <p className="text-gray-600 mb-4">Level: {course.level}</p>
              <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }