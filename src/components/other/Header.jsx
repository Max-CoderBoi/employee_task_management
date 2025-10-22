import React from 'react'
import { LogOut } from 'lucide-react'

const Header = ({ changeUser, data }) => {
  const username = data ? data.firstName : 'Admin'

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('')
  }

  return (
    <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2c2c2c] rounded-2xl shadow-xl px-8 py-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 transition-all">
      
      {/* Welcome Text */}
      <div className="space-y-1 text-center sm:text-left">
        <p className="text-sm text-gray-400">Welcome back,</p>
        <h1 className="text-3xl font-extrabold text-white">
          {username} <span className="animate-bounce inline-block">👋</span>
        </h1>
      </div>

      {/* Logout Button */}
      <button
        onClick={logOutUser}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-400 focus:outline-none active:scale-95 transition-all duration-150 text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-md"
      >
        <LogOut className="w-4 h-4" /> Log Out
      </button>
    </div>
  )
}

export default Header
