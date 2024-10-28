import React from "react";

const Candidate = () => {
  return (
    <div className=" overflow-hidden ">
      <nav className="flex items-center justify-between p-5">
        <div className="flex items-center gap-2">
          <img src="candidate.png" alt="Dashboard Icon" className="w-6" />
          <h1 className="text-3xl">Add Candidate</h1>
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
      <div className="flex items-center justify-center gap-5  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex-col">
        <div className="flex flex-col gap-4 p-10 bg-white rounded-xl 2xl:w-full md:w-full sm:w-full lg:w-full xl:w-full shadow-md">
          <label htmlFor="select">Select An Assesment</label>
          <select
            name=""
            id=""
            className="px-4 py-2 w-full rounded-md border-2 border-gray-400 placeholder-gray-400"
          >
            <option value="">
              <h1 className="text-gray-400">Select An Assesment</h1>
            </option>
            <option value=""> assesment -1</option>
            <option value=""> assesment -2</option>
          </select>
          <label htmlFor="select">Select An Assesment</label>
          <select
            name=""
            id=""
            className="px-4 py-2 w-full rounded-md border-2 border-gray-400 placeholder-gray-400"
          >
            <option value="">
              <h1 className="text-gray-400">Select An Assesment</h1>
            </option>

            <option value=""> assesment -1</option>
            <option value=""> assesment -2</option>
          </select>
          <label htmlFor="input">Choose File:</label>
          <input
            type="file"
            accept=".xlsx, .xls"
            className="border-2 border-gray-400 p-1 rounded-md placeholder-gray-400"
          />
          <div className="flex flex-col items-center">
            <p className="text-white">----</p>
            <button className="p-4 bg-[#1fc074] rounded text-white w-1/2 ">
              Add Questions
            </button>
          </div>
        </div>
        {/*image preview */}
        <div className="flex flex-col gap-2 p-2 bg-white rounded-xl 2xl:w-full md:w-full sm:w-full lg:w-full xl:w-full">
          <div>
            <img
              src="image.png"
              alt=""
              className="w-full rounded-md shadow-lg"
            />
          </div>
          {/* image information */}
          <div>
            <div className="flex flex-col bg-[#f0f2f5] p-3 gap-2 rounded-md shadow-lg">
              <div className="flex items-center justify-start gap-3 ">
                <img src="excel.png" alt="" />
                <div>
                  <h1>Formate To Add Questions</h1>
                  <p className="text-xs text-gray-500">
                    14 MB,Microsoft Excel Workout
                  </p>
                </div>
              </div>
              <hr className="w-full " />
              <button className="bg-white w-full p-3 text-black rounded-md">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-10">
        {" "}
        <p className="text-white">-</p>
        <p className="xl:px-10 text-end">
          *Download the template, fill in the questions, and upload it.
        </p>
      </div>
    </div>
  );
};

export default Candidate;
