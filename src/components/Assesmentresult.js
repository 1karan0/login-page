import React, { useState } from 'react';

const AssessmentResult = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Default rows per page

  const data = [
    {
      assessmentName: 'Amity_Assessment_MBA',
      totalModules: 2,
      maxMarks: 50,
      timeLimit: 90,
      proctoring: 'Webcam, TabSwitch, MultiplePersonInFrame, PhoneInFrame',
      startDate: '25 September 2024 10.30am',
      endDate: '28 September 2024 4.00pm',
    },
    {
      assessmentName: 'Assessment For Indo Global College',
      totalModules: 2,
      maxMarks: 60,
      timeLimit: 60,
      proctoring: 'TabSwitch',
      startDate: '09 October 2024 9.43pm',
      endDate: '09 October 2024 9.44pm',
    },
    {
      assessmentName: 'Test Indo',
      totalModules: 2,
      maxMarks: 59,
      timeLimit: 60,
      proctoring: 'Webcam, TabSwitch',
      startDate: '10 October 2024 4.15pm',
      endDate: '10 October 2024 4.35pm',
    },
    {
      assessmentName: 'Assessment for RGCE Kangra',
      totalModules: 2,
      maxMarks: 60,
      timeLimit: 59,
      proctoring: 'TabSwitch',
      startDate: '10 October 2024 5.30pm',
      endDate: '11 October 2024 12.00am',
    },
    {
      assessmentName: 'Assessment for Akal University',
      totalModules: 2,
      maxMarks: 60,
      timeLimit: 60,
      proctoring: 'TabSwitch',
      startDate: '11 October 2024 5.30pm',
      endDate: '11 October 2024 11.00pm',
    },
    {
      assessmentName: 'Assessment for Akal University',
      totalModules: 2,
      maxMarks: 60,
      timeLimit: 60,
      proctoring: 'TabSwitch',
      startDate: '11 October 2024 5.30pm',
      endDate: '11 October 2024 11.00pm',
    },
    {
      assessmentName: 'Assessment for Akal University',
      totalModules: 2,
      maxMarks: 60,
      timeLimit: 60,
      proctoring: 'TabSwitch',
      startDate: '11 October 2024 5.30pm',
      endDate: '11 October 2024 11.00pm',
    },
    {
      assessmentName: 'Assessment for Akal University',
      totalModules: 2,
      maxMarks: 60,
      timeLimit: 60,
      proctoring: 'TabSwitch',
      startDate: '11 October 2024 5.30pm',
      endDate: '11 October 2024 11.00pm',
    },
    {
      assessmentName: 'Assessment for Akal University',
      totalModules: 2,
      maxMarks: 60,
      timeLimit: 60,
      proctoring: 'TabSwitch',
      startDate: '11 October 2024 5.30pm',
      endDate: '11 October 2024 11.00pm',
    },
    {
      assessmentName: 'Assessment for Akal University',
      totalModules: 2,
      maxMarks: 60,
      timeLimit: 60,
      proctoring: 'TabSwitch',
      startDate: '11 October 2024 5.30pm',
      endDate: '11 October 2024 11.00pm',
    },
    // More data items...
  ];

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page on rows per page change
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Assessment Results</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left font-semibold border-b">Assessment Name</th>
              <th className="py-3 px-4 text-left font-semibold border-b">Total Modules</th>
              <th className="py-3 px-4 text-left font-semibold border-b">Max Marks</th>
              <th className="py-3 px-4 text-left font-semibold border-b">Time Limit (mins)</th>
              <th className="py-3 px-4 text-left font-semibold border-b">Proctoring</th>
              <th className="py-3 px-4 text-left font-semibold border-b">Start Date</th>
              <th className="py-3 px-4 text-left font-semibold border-b">End Date</th>
              <th className="py-3 px-4 text-left font-semibold border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={index} className="hover:bg-green-50 transition duration-150">
                <td className="py-3 px-4 border-b text-gray-700">{row.assessmentName}</td>
                <td className="py-3 px-4 border-b text-gray-700">{row.totalModules}</td>
                <td className="py-3 px-4 border-b text-gray-700">{row.maxMarks}</td>
                <td className="py-3 px-4 border-b text-gray-700">{row.timeLimit}</td>
                <td className="py-3 px-4 border-b text-gray-700">{row.proctoring}</td>
                <td className="py-3 px-4 border-b text-gray-700">{row.startDate}</td>
                <td className="py-3 px-4 border-b text-gray-700">{row.endDate}</td>
                <td className="py-3 px-4 border-b text-center">
                  <button className="bg-green-200 hover:bg-green-300 border-green-600 border-2 transition-all duration-300 hover:scale-105 text-green-500 px-4 py-1 rounded-lg">
                    VIEW
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center">
          <span className="text-gray-600 mr-2">Rows per page:</span>
          <select
            className="p-1 font-semibold border rounded"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            {[5, 10, 15, 20].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <span className="text-gray-600">
          {indexOfFirstRow + 1}-{Math.min(indexOfLastRow, data.length)} of {data.length}
        </span>
        <div>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-lg ${currentPage === 1 ? 'text-gray-400' : 'text-green-600'}`}
          >
            {'<'}
          </button>

          <span className="px-4 py-2 rounded-lg bg-green-200 text-gray-800 font-semibold">
            {currentPage}
          </span>

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-lg ${currentPage === totalPages ? 'text-gray-400' : 'text-green-500'}`}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResult;
