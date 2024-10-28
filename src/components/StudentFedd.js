import React, { useState } from 'react'

const StudentFeed = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const arr  =[
    {
      feedback:"The interface for the test is built in simple and understandable manner... size of some question can improved as it is hard to read paragraph question .. thank for the oppurtunity..",
      name:"mrityunjey",
      email:"mrityujey@gmail.com",
      date:"12/12/2034"
    },
    {
      feedback:"The interface for the test is built in simple and understandable manner... size of some question can improved as it is hard to read paragraph question .. thank for the oppurtunity..",
      name:"mrityunjey",
      email:"mrityujey@gmail.com",
      date:"12/12/2034"
    },
    {
      feedback:"The interface for the test is built in simple and understandable manner... size of some question can improved as it is hard to read paragraph question .. thank for the oppurtunity..",
      name:"mrityunjey",
      email:"mrityujey@gmail.com",
      date:"12/12/2034"
    },
    {
      feedback:"The interface for the test is built in simple and understandable manner... size of some question can improved as it is hard to read paragraph question .. thank for the oppurtunity..",
      name:"mrityunjey",
      email:"mrityujey@gmail.com",
      date:"12/12/2034"
    },
    {
      feedback:"The interface for the test is built in simple and understandable manner... size of some question can improved as it is hard to read paragraph question .. thank for the oppurtunity..",
      name:"mrityunjey",
      email:"mrityujey@gmail.com",
      date:"12/12/2034"
    },
    {
      feedback:"The interface for the test is built in simple and understandable manner... size of some question can improved as it is hard to read paragraph question .. thank for the oppurtunity..",
      name:"mrityunjey",
      email:"mrityujey@gmail.com",
      date:"12/12/2034"
    },
    {
      feedback:"The interface for the test is built in simple and understandable manner... size of some question can improved as it is hard to read paragraph question .. thank for the oppurtunity..",
      name:"mrityunjey",
      email:"mrityujey@gmail.com",
      date:"12/12/2034"
    },
  ]
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  return (
    <div>
    <div className="relative h-[80px] p-4 bg-gray-100">
    {/* Dropdown Button */}
    <div className="absolute  right-4">
      <button
        onClick={toggleDropdown}
        className=" px-2 py-1  border-2 rounded-2xl flex justify-between gap-2 items-center"
      >
        <img src="time.png" alt="" />
        Posted at
        <img src="down.png" alt="" className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}/>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0  w-48 bg-white rounded-lg shadow-lg ">
          <ul className="text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Today </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">This week </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">This month </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">This Year </li>
          </ul>
        </div>
      )}
    </div>
    </div>
    <div className='h-[600px] p-3 overflow-y-auto scrollbar-thin scrollbar-thumb-[#1fc074] scrollbar-track-[#15262d]'>
      <div className='flex flex-col gap-3 '>{
        arr.map((item,index)=>(
          <div key={index} className='flex flex-col w-full rounded-[13px] p-2 bg-white gap-2'>
            <h1 className='font-semibold text-lg text-blue-950'>{item.feedback}</h1>
            <ul>
              <li className='text-sm font-semibold text-blue-950'><span className='text-slate-400 text-sm font-semibold'>Name </span>: {item.name}</li>
              <li className='text-sm font-semibold text-blue-950'><span className='text-slate-400 text-sm font-semibold'>Email </span>: {item.email}</li>
              <li className='text-sm font-semibold text-blue-950'><span className='text-slate-400 text-sm font-semibold'>Date </span>: {item.date}</li>
            </ul>
          </div>
        ))
      }</div>
    </div>
    
    </div>
  )
}

export default StudentFeed
