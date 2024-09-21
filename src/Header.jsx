import { useNavigate } from 'react-router-dom'

export default function Header({ isAuthenticated }) {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/home");
  }

  const handleDashboard = () => {
    if (isAuthenticated) {
      navigate("sidebar")
    } else {
      navigate("/auth")
    }
  }

  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-2 sm:mb-0">R&D AI Hub</h1>
        {/* Center the navigation links */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <li><a href="/home" className="hover:text-indigo-200">Home</a></li>
            <li><a href="/about" className="hover:text-indigo-200">About</a></li>
            <li><a href="/contact" className="hover:text-indigo-200">Contact</a></li>
            <li>
              <a onClick={handleDashboard} className="hover:text-indigo-200 cursor-pointer">Dashboard</a>
            </li>
          </ul>
        </nav>
        {/* Right side for Login/Logout button */}
        <div className="mt-2 sm:mt-0">
          {isAuthenticated ? (
            <button onClick={onLogout} className="hover:text-indigo-200">
              Logout
            </button>
          ) : (
            <a href="/auth" className="hover:text-indigo-200">Login</a>
          )}
        </div>
      </div>
    </header>
  );
}
