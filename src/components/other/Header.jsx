import React from 'react'

const Header = ({ changeUser, data }) => {
  const username = data ? data.firstName : 'Admin'

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('')
  }

  return (
    <div className="bg-[#1c1c1c] rounded-xl shadow-md px-6 py-5 mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-lg text-gray-400">Welcome back,</h1>
        <h2 className="text-3xl font-bold text-white mt-1">{username} 👋</h2>
      </div>

      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white font-semibold text-sm px-6 py-2 rounded-md shadow"
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
