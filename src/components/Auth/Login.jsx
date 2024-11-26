import React, { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);

    setEmail('')
    setPassword('')
    
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center px-9">
      <div className="border-2 border-blue-600 w-full md:w-[50%] lg:w[30%] rounded-xl p-11 shadow-xl shadow-blue-600/30">

        <form onSubmit={(e) => submitHandler(e)} className="flex flex-col items-center justify-center w-full">

          <div className="w-full mb-5">
            <label htmlFor="username" className="block text-gray-300">Username </label>

            <input
              type="email" placeholder="john@gmail.com" onChange={(e)=>setEmail(e.target.value)} value={email}
              className="block text-gray-300  mt-2 w-full placeholder-gray-500 rounded-lg border border-blue-500 bg-transparent px-5 py-2.5 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />

          </div>

          <div className="w-full mb-5">
            <label htmlFor="username" className="block text-gray-300" >Password</label>

            <input
              type="password" placeholder="*********" minLength='6' onChange={(e)=>setPassword(e.target.value)} value={password}
              className="block text-gray-300  mt-2 w-full placeholder-gray-500 rounded-lg border border-blue-500 bg-transparent px-5 py-2.5 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />

          </div>

          <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg w-full px-5 py-2.5 text-center">Submit</button>

        </form>

      </div>
    </div>
  );
};

export default Login;
