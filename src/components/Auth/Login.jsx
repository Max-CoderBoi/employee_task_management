// // import React, { useState } from 'react'

// // const Login = ({handleLogin}) => {

    

// //     const [email, setEmail] = useState('')
// //     const [password, setPassword] = useState('')


// //     const submitHandler = (e)=>{
// //         e.preventDefault()
// //         handleLogin(email,password)
// //         setEmail("")
// //         setPassword("")
// //     }


// //   return (
// //     <div className='flex h-screen w-screen items-center justify-center'>
// //         <div className='border-2 rounded-xl border-emerald-600 p-20'>
// //             <form 
// //             onSubmit={(e)=>{
// //                 submitHandler(e)
// //             }}
// //             className='flex flex-col items-center justify-center'
// //             >
// //                 <input 
// //                 value={email}
// //                 onChange={(e)=>{
// //                     setEmail(e.target.value)
// //                 }}
// //                 required 
// //                 className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
// //                 />
// //                 <input
// //                 value={password}
// //                 onChange={(e)=>{
// //                     setPassword(e.target.value)
// //                 }}
// //                 required 
// //                 className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
// //                 <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
// //             </form>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Login

// // Login.jsx
// import React, { useState } from "react";

// const Login = ({ handleLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     handleLogin(email, password);
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="flex h-screen w-screen items-center justify-center">
//       <div className="border-2 rounded-xl border-emerald-600 p-20">
//         <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             type="email"
//             placeholder="Enter your email"
//             className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
//           />
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             type="password"
//             placeholder="Enter password"
//             className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400"
//           />
//           <button className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full">
//             Log in
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


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
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 to-emerald-900">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-10 w-[90%] max-w-md">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">Welcome Back 👋</h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <div>
            <label className="text-white text-sm mb-1 block">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="e.g. user@example.com"
              className="w-full px-4 py-2 rounded-lg text-sm bg-white/20 text-white placeholder:text-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="text-white text-sm mb-1 block">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg text-sm bg-white/20 text-white placeholder:text-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-3 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-gray-300 text-center mt-4">Admin login: admin@me.com / 123</p>
      </div>
    </div>
  );
};

export default Login;
