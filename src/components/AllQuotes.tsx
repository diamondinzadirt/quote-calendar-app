import React, { useState } from "react";
import MonthNavigation from "./MonthNavigation";
import Calendar from "./Calendar";

const AllQuotes: React.FC = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <>
      <MonthNavigation
        month={month}
        year={year}
        setMonth={setMonth}
        setYear={setYear}
      />
      <Calendar month={month} year={year} />
    </>
  );
};

export default AllQuotes;
