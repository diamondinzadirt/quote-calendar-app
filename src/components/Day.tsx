import React from "react";

// Define the props for the Day component
interface DayProps {
  date: number;
}

// Functional component for rendering individual days in the calendar
const Day: React.FC<DayProps> = ({ date }) => {
  const quotes = 5; // Example data
  const total = 23045; // Example data

  return (
    <div className="day-cell p-4 text-left border rounded">
      <div>{date}</div>
      <div>{quotes} Quotes</div>
      <div className="text-green-500">Total: ${total.toFixed(2)}</div>
    </div>
  );
};

export default Day;
