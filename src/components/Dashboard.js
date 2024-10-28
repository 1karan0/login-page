import React from 'react';

const Dashboard = () => {
  const card = [
    {
      heading: 'Total Assessment Conducted',
      value: '34k',
      increase: ' than yesterday',
      per:"+1%",
      icon: 'green1.png',
      bg: 'green.png',
    },
    {
      heading: 'Number Of Active Assessments',
      value: '2,300',
      increase: ' than last week',
      per:"+3%",
      icon: 'pink1.png',
      bg: 'pink.png',
    },
    {
      heading: 'Total No. Of Students',
      value: '+91',
      increase: 'Just updated',
      icon: 'blue1.png',
      bg: 'blue.png',
    },
    {
      heading: 'Upcoming Assessments',
      value: '2300',
      increase: ' than last week',
      per:"+3%",
      icon: 'gold1.png',
      bg: 'gold.png',
    },
    {
      heading: 'Total Colleges',
      value: '+91',
      increase: 'Just updated',
      icon: 'purple1.png',
      bg: 'purple.png',
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between p-5">
        <div className="flex items-center gap-2">
          <img src="dashboard-dark.png" alt="Dashboard Icon" className="w-6" />
          <h1 className="text-3xl">Dashboard</h1>
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

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
        {card.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl px-5 flex flex-col items-center relative"
            
          >
            <div className="relative bottom-5 w-full">
              <img src={item.icon} alt="Icon" className="w-12 p-2" style={{
              backgroundImage: `url(${item.bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              
            }} />
            <h3 className=" text-right text-gray-400">{item.heading}</h3>
            <p className="text-2xl font-bold text-right">{item.value}</p>
            <hr className='w-full text-gray-400 mt-2'/>

            <p className="text-gray-400 text-start "><span className='text-lg font-bold text-green-500'>{item.per}</span> {item.increase}</p>
            </div>
            
            
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
