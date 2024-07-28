import React from "react";
import Day from "./Day";

interface CalendarProps {
  month: number;
  year: number;
  onDayClick: (date: number) => void;
}
// Main component that handles the calendar display and navigation
const Calendar: React.FC<CalendarProps> = ({ month, year, onDayClick }) => {
  // Calculate the number of days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Function to render day components for each day in the current month
  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(<Day key={i} date={i} onDayClick={onDayClick} />);
    }
    return days;
  };

  return (
    <div className="calendar-container">
      <div className="grid grid-cols-7 gap-2">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
