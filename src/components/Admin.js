import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import Login from './Login';
import AddAssesment from './AddAssesment';
import Dashboard from './Dashboard';
import Candidate from './Candidate';
import Assesment from './Assesment';
import Addquestions from './Addquestions';
import Assesmentresult from './Assesmentresult';
import StudentFedd from './StudentFedd';

const Admin = () => {
  return (
    <>
    <BrowserRouter>
    
      <div className="min-h-screen flex p-5">
        {/* Sidebar */}
        <aside className="w-56 bg-[#15262d] text-white  p-4 rounded-lg flex flex-col justify-between">
         
          <nav className="flex flex-col space-y-2 ">
          <img src="white.png" alt="" className='px-5'/>
          
          <NavLink to="/" className={({ isActive }) => 
              `flex items-center  gap-2 px-4 py-2 rounded hover:bg-[#4f4f52] hover:text-white transition-all duration-300 ${isActive ? 'bg-[#1fc074] text-white' : ''}`
            }> <img src="dashboard.png" alt="" />Dashboard</NavLink>
            <NavLink to="/AddAssesment" className={({ isActive }) => 
              `flex items-center  gap-2 px-4 py-2 rounded hover:bg-[#4f4f52] hover:text-white transition-all duration-300 ${isActive ? 'bg-[#1fc074] text-white' : ''}`
            }> <img src="addasses.png" alt="" />
                Add Assesment</NavLink>
            <NavLink to="/Candidate" className={({ isActive }) => 
              `flex items-center  gap-2 px-4 py-2 rounded hover:bg-[#4f4f52] hover:text-white transition-all duration-300 ${isActive ? 'bg-[#1fc074] text-white' : ''}`
            }> <img src="addcandi.png" alt="" />
                Add Candidate</NavLink>
            <NavLink to="/Assesment" className={({ isActive }) => 
              `flex items-center  gap-1 px-4 py-2 rounded hover:bg-[#4f4f52] hover:text-white transition-all duration-300 ${isActive ? 'bg-[#1fc074] text-white' : ''}`
            }> <img src="updateass.png" alt="" />
                Update Assesment</NavLink>
                <NavLink to="/Question" className={({ isActive }) => 
              `flex items-center  gap-2 px-4 py-2 rounded hover:bg-[#4f4f52] hover:text-white transition-all duration-300 ${isActive ? 'bg-[#1fc074] text-white' : ''}`
            }> <img src="addquestion.png" alt="" />
                Add Questions</NavLink>
                <NavLink to="/assesmentresult" className={({ isActive }) => 
              `flex items-center  gap-2 px-4 py-2 rounded hover:bg-[#4f4f52] hover:text-white transition-all duration-300 ${isActive ? 'bg-[#1fc074] text-white' : ''}`
            }> <img src="result.png" alt="" />
                Assesment Result</NavLink>
                <NavLink to="/studentfeedback" className={({ isActive }) => 
              `flex items-center  gap-2 px-4 py-2 rounded hover:bg-[#4f4f52] hover:text-white transition-all duration-300 ${isActive ? 'bg-[#1fc074] text-white' : ''}`
            }> <img src="feedback.png" alt="" />
                Student Feedback</NavLink>
            
            
          </nav>
          <button className='flex items-center justify-center relative  hover:bg-[#1fc074] focus:bg-[#1fc074] p-3 transition-all duration-300 rounded'><img src="logout.png" alt="" />Log Out</button>
        </aside>
        
        {/* Main Content */}
        <div className="flex-1 bg-gray-100">
          {/* Header */}
          
          
          {/* Content */}
          <main className="p-6">
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/AddAssesment' element={<AddAssesment/>}/>
              <Route path='/Candidate' element={<Candidate/>}/>
              <Route path='/Assesment' element={<Assesment/>}/>
              <Route path='/Question' element={<Addquestions/>}/>
              <Route path='/assesmentresult' element={<Assesmentresult/>}/>
              <Route path='/studentfeedback' element={<StudentFedd/>}/>
             
              
              
              {/* Add additional routes as needed */}
            </Routes>
          </main>
        </div>
      </div>
    
    </BrowserRouter>
    </>
  )
}

export default Admin

