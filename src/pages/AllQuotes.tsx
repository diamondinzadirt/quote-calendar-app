import React, { useState } from "react";
import MonthNavigation from "../components/MonthNavigation";
import Calendar from "../components/Calendar";
import QuotesModal from "../components/UI/QuotesModal";

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

  const handleAddQuote = (
    title: string,
    startTime: string,
    endTime: string
  ) => {
    // Logic to add a new quote
    const newQuote = `${title} from ${startTime} to ${endTime}`;
    setQuotes([...quotes, newQuote]);
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
