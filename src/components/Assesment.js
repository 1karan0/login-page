import React, { useState } from 'react';
import { FaEdit, FaTrash, FaEye, FaFileCsv, FaDownload } from 'react-icons/fa';

const Assessment = () => {
  const [data, setData] = useState([
    {
      assessmentName: 'Amity_Assessment_MBA',
      moduleName: 'Apti',
      maxMarks: 50,
      timeLimit: 90,
      proctoring: 'Webcam, TabSwitch, MultiplePersonInFrame, PhoneInFrame',
      startDate: '25 September 2024 5.00am',
      endDate: '28 September 2024 10.30am',
      
    },
    {
      assessmentName: 'Assessment For Indo Global College',
      moduleName: 'Tech',
      maxMarks: 60,
      timeLimit: 60,
      proctoring: 'TabSwitch',
      startDate: '09 October 2024 4.13pm',
      endDate: '09 October 2024 4.14pm',

    },
    {
      assessmentName: 'Test indo',
      moduleName: 'Tech',
      maxMarks: 59,
      timeLimit: 60,
      proctoring: 'Webcam, TabSwitch',
      startDate: '10 October 2024 10.45am',
      endDate: '10 October 2024 11.05am',
      
    },
    {
      assessmentName: 'Assessment for RGCE Kangra',
      moduleName: 'Tech',
      maxMarks: 60,
      timeLimit: 59,
      proctoring: 'TabSwitch',
      startDate: '10 October 2024 12.00pm',
      endDate: '10 October 2024 6.30pm',
      
    },
    {
      assessmentName: 'Assessment for Akal University',
      moduleName: 'Technical Round',
      maxMarks: 60,
      timeLimit: 60,
      proctoring: 'TabSwitch',
      startDate: '11 October 2024 12.00pm',
      endDate: '11 October 2024 5.30pm',
     
    },
    {
      assessmentName: 'Assessment for Akal University',
      moduleName: 'Technical Round',
      maxMarks: 60,
      timeLimit: 60,
      proctoring: 'TabSwitch',
      startDate: '11 October 2024 12.00pm',
      endDate: '11 October 2024 5.30pm',
     
    },
    {
      assessmentName: 'Assessment  Akal University',
      moduleName: 'Technical ',
      maxMarks: 630,
      timeLimit: 100,
      proctoring: 'TabSwitch',
      startDate: '11 October 2024 12.00pm',
      endDate: '11 October 2024 5.30pm',
     
    },
    {
      assessmentName: 'Assessment for mharac University',
      moduleName: 'Technical Rounde',
      maxMarks: 50,
      timeLimit: 70,
      proctoring: 'TabSwitch',
      startDate: '13 October 2024 12.00pm',
      endDate: '17 October 2024 5.30pm',
     
    },
    
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleToggle = (index) => {
    const absoluteIndex = (currentPage - 1) * rowsPerPage + index;
    const newData = [...data];
    newData[absoluteIndex].enabled = !newData[absoluteIndex].enabled;
    setData(newData);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Update Assessment</h2>

      

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left font-semibold border-b">Assessment Name</th>
              <th className="py-3 px-4 text-left font-semibold border-b">Module Name</th>
              <th className="py-3 px-4 text-left font-semibold border-b">Max Marks</th>
              <th className="py-3 px-4 text-left font-semibold border-b">Time Limit (mins)</th>
              <th className="py-3 px-4 text-left font-semibold border-b">Proctoring</th>
              <th className="py-3 px-4 text-left font-semibold border-b">Start Date</th>
              <th className="py-3 px-4 text-left font-semibold border-b">Last Date</th>
              <th className="py-3 px-4 text-left font-semibold border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((item, index) => (
              <tr key={index} className="hover:bg-green-50 transition duration-150">
                <td className="py-3 px-4 border-b">{item.assessmentName}</td>
                <td className="py-3 px-4 border-b">{item.moduleName}</td>
                <td className="py-3 px-4 border-b">{item.maxMarks}</td>
                <td className="py-3 px-4 border-b">{item.timeLimit}</td>
                <td className="py-3 px-4 border-b">{item.proctoring}</td>
                <td className="py-3 px-4 border-b">{item.startDate}</td>
                <td className="py-3 px-4 border-b">{item.endDate}</td>
                <td className="py-3 px-4 border-b ">
                  <div className='flex gap-2'><button className="text-green-500 hover:text-green-700">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                  <button className="text-green-500 hover:text-green-700">
                    <FaEye />
                  </button></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-lg bg-gray-200 text-gray-500 disabled:opacity-50"
        >
          {'<'}
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded-lg mx-1 ${
              currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-lg bg-gray-200 text-gray-500 disabled:opacity-50"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Assessment;
