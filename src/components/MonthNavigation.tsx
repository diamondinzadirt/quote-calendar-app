import React from "react";

// Define the props for the MonthNavigation component
interface MonthNavigationProps {
  month: number;
  year: number;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
}

// Functional component for month navigation
const MonthNavigation: React.FC<MonthNavigationProps> = ({
  month,
  year,
  setMonth,
  setYear,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Handle previous month click
  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  // Handle next month click
  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="App flex">
      {/* Left side */}
      <div className="w-2/3 p-4">
        <header className="App-header text-left">
          <h1 className="text-2xl  font-bold mb-4">All Existing Quotes</h1>
          <p className="text-gray-500 mb-8">View all created quotes</p>
        </header>
      </div>

      {/* Right side */}
      <div className="w-1/3 p-4 flex flex-col justify-center items-center">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-medium">
            {months[month]} {year}
          </div>
          <button onClick={handlePrev} className="px-4 py-2 ">
            &lt;
          </button>

          <button onClick={handleNext} className="px-4 py-2 ">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonthNavigation;
