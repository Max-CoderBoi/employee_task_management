
import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-emerald-900 p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl px-8 py-10 w-full max-w-md transition-all duration-300">
        <h2 className="text-4xl text-white font-extrabold mb-6 text-center tracking-wide">
          👋 Welcome Back
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <div>
            <label className="text-white text-sm font-medium mb-1 block">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="user@example.com"
              className="w-full px-4 py-2.5 rounded-xl text-sm bg-white/20 text-white placeholder:text-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>
          <div>
            <label className="text-white text-sm font-medium mb-1 block">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl text-sm bg-white/20 text-white placeholder:text-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-3 rounded-xl shadow-md transition duration-300"
          >
            🚀 Sign In
          </button>
        </form>
        <p className="text-sm text-gray-300 text-center mt-6">
          Admin Login 👉 <span className="text-white font-medium">admin@me.com / 123</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
