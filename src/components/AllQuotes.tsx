import React, { useState } from "react";
import MonthNavigation from "./MonthNavigation";
import Calendar from "./Calendar";
import QuotesModal from "./UI/QuotesModal";

const AllQuotes: React.FC = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [temperature, setTemperature] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleDayClick = (date: number) => {
    // Set the date, temperature, and quotes for the selected day here
    setSelectedDate(`2024-07-${String(date).padStart(2, "0")}`);
    setTemperature("75"); // Example temperature, will be replaced with actual data
    setQuotes(["Quote 1", "Quote 2"]); // Quote Example
    setModalOpen(true);

    console.log(selectedDate, temperature, quotes);
  };

  const handleAddQuote = () => {
    // Logic to add a new quote
    setQuotes([...quotes, `New Quote ${quotes.length + 1}`]);
  };

  return (
    <>
      <QuotesModal
        isOpen={isModalOpen}
        date={selectedDate}
        temperature={temperature}
        quotes={quotes}
        onClose={() => setModalOpen(false)}
        onAddQuote={handleAddQuote}
      />
      <MonthNavigation
        month={month}
        year={year}
        setMonth={setMonth}
        setYear={setYear}
      />
      <Calendar month={month} year={year} onDayClick={handleDayClick} />
    </>
  );
};

export default AllQuotes;
