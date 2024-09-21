import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()   
    localStorage.setItem('userEmail', email);
    navigate("/sidebar")
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p className="mt-4 text-center">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 hover:underline focus:outline-none"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  )
}