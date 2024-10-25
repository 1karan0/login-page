import React from "react";

function Login() {
  return (
    <div className="md:flex lg:flex 2xl:flex xl:flex w-full h-full xsm:flex-col">
      {/* Left Section: Login Form */}
      <img src="logo.png" alt="Logo" className="absolute p-16" />
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-3xl font-bold text-center mb-4">LOGIN</h2>
        <p className="text-gray-700 text-center mb-6 text-lg">
          How to get started lorem ipsum dolor at?
        </p>
        <div className="flex justify-center gap-4 items-center flex-col">
          <div className="relative w-[150%] max-w-sm">
            {/* Username Field */}
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <img src="Vector-1.png" alt="User Icon" className="w-4" />
            </div>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-10 py-3 rounded-2xl shadow-sm bg-[#e4f8ef] placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div className="relative w-[150%] max-w-sm mt-4">
            {/* Password Field */}
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <img src="Vector-2.png" alt="Password Icon" className="w-4" />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-10 py-3 rounded-2xl shadow-sm bg-[#e4f8ef] placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div className="mt-6 w-2/3 max-w-sm">
            <button className="w-full px-5 py-3 bg-[#1fc074] text-xl font-semibold text-white rounded-2xl hover:bg-green-600">
              Login Now
            </button>
          </div>
        </div>
      </div>

      {/* Right Section: Promotional Banner */}
      <div
        className="w-full  flex items-center justify-center bg-cover xsm:hidden sm:hidden md:hidden"
        style={{ backgroundImage: `url('bg.png')` }}
      >
        
        <div className="text-start bg-[#1fc074]  w-[450px] h-[650px] p-10 rounded-[40px] absolute z-0  ">
          <p className="text-3xl font-bold text-white leading-snug">
            Very good <br /> works are <br />
            waiting for <br /> you! Login <br /> Now!!!
          </p>
          <img src="light.png" alt="Lightning Icon" className=" relative right-16 top-32 w-16 " />
        </div>
        
        <img
          src="womam.png"
          alt="Login promo"
          className=" relative left-10 top-7  z-10  "
        />
      </div>
    </div>
  );
}

export default Login;
