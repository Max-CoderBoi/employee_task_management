import React from 'react'
import { LogOut } from 'lucide-react' // optional icon if using lucide-react or similar

const Header = ({ changeUser, data }) => {
  const username = data ? data.firstName : 'Admin'

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('')
  }

  return (
    <div className="bg-[#1c1c1c] rounded-xl shadow-lg px-8 py-6 mb-6 flex items-center justify-between">
      {/* Welcome Section */}
      <div className="space-y-1">
        <p className="text-sm text-gray-400">Welcome back,</p>
        <h1 className="text-3xl font-bold text-white">
          {username} <span className="wave">👋</span>
        </h1>
      </div>

      {/* Log Out Button */}
      <button
        onClick={logOutUser}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200 text-white font-semibold text-sm px-5 py-2 rounded-md shadow-md"
      >
        <LogOut className="w-4 h-4" /> Log Out
      </button>
    </div>
  )
}

export default Header
