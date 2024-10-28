import React from 'react'

const AddAssesment = () => {
  return (
    <div>
       <nav className="flex items-center justify-between p-5">
        <div className="flex items-center gap-2">
          <img src="addassesment.png" alt="Dashboard Icon" className="w-6" />
          <h1 className="text-3xl">Add Assesment</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            {/* Search Input */}
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search here"
              className="py-2 pl-4 pr-10 rounded-lg border-2 border-black placeholder-black"
            />
          </div>
          <button>
            <img src="account.png" alt="Account Icon" />
          </button>
          <button>
            <img src="notify.png" alt="Notification Icon" />
          </button>
        </div>
      </nav>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full ">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Create Assessment</h2>
        <form className="space-y-4">
          <div className='flex justify-between items-center'>
            <label className="w-[20%] text-gray-700">Assessment Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Assessment Name"
            />
          </div>
          <div className='flex justify-between items-center'>
            <label className="w-[20%] text-gray-700">Description</label>
            <textarea
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Description"
            ></textarea>
          </div>
          <div className='flex items-center justify-between'>
            <label className="w-[20%] text-gray-700">Total Marks</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Maximum Marks"
            />
          </div>
          <div className='flex items-center justify-between'>
            <label className="w-[20%] text-gray-700">Time Limit (mins)</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Time Limit"
            />
          </div>
          <div className='flex items-center gap-12'>
            <label className=" text-gray-700">Date For Assessment</label>
            <div className="flex space-x-7 items-center">
            <h1>FROM</h1>
              <input
                type="date"
                className="w-full px-12 py-2 border rounded-md"
                placeholder="From"
              />
              <h1>TO</h1>
              <input
                type="date"
                className="w-full px-12 py-2 border rounded-md"
                placeholder="To"
              />
            </div>
          </div>
          <div className='flex gap-16'>
            <label className="block text-gray-700">Proctoring Options</label>
            <div className="grid grid-cols-3 gap-4 w-[80%]">
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Control Key Pressed</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Phone In Frame</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Multi Person In Frame</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">MIC</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Webcam</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">TabSwitch</span>
                </label>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <label className="w-[20%] text-gray-700">Module Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Module Name"
            />
          </div>
          <div className='flex justify-between items-center'>
            <label className="w-[20%] text-gray-700">Time Limit</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Time Limit"
            />
          </div>
          <div className="flex space-x-2 justify-end">
            <button
              type="button"
              className=" px-4 py-2 bg-green-500 text-white rounded-md"
            >
              + Module
            </button>
            <button
              type="button"
              className=" px-4 py-2 bg-red-500 text-white rounded-md"
            >
              - Module
            </button>
          </div>
          
        </form>
        <div className='flex justify-center'>
          <p className='text-white'>-</p>
        <button
            type="submit"
            className=" mt-2 w-[20%] p-2 bg-green-600 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddAssesment
