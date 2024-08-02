import "./TimePicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TimePickerProps {
  initialDate: string; // Expect a string date
  onChange: (date: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ initialDate, onChange }) => {
  // Convert the initial date string to a Date object if possible
  const [date, setDate] = useState<Date | null>(() => {
    const parsedDate = new Date(initialDate);
    return isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
  });

  const handleChange = (date: Date | null) => {
    setDate(date);
    if (date) {
      onChange(date.toISOString()); // Send date as ISO string
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <DatePicker
        selected={date}
        onChange={handleChange}
        showTimeSelect
        dateFormat="EEE MMMM d, yyyy h:mm aa"
        className="border p-2 rounded"
        calendarClassName="custom-datepicker"
      />
    </div>
  );
};

export default TimePicker;
