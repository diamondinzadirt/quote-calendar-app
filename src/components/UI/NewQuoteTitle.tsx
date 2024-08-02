import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NewQuoteTitleProps {
  onClose: () => void;
  onSubmit: (title: string, startTime: string, endTime: string) => void;
}
const NewQuoteTitle: React.FC<NewQuoteTitleProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("10:30");
  const navigate = useNavigate();

  const handleSubmit = () => {
    onSubmit(title, startTime, endTime);
    onClose();
    navigate("/new-quote");
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Create New Quote</h2>
          <button onClick={onClose} className="text-gray-500">
            X
          </button>
        </div>
        <p className="text-gray-500 mb-4">Enter quote name and time</p>
        <input
          type="text"
          placeholder="Enter quote title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <div className="flex justify-between mb-4">
          <div className="w-1/2 mr-2">
            <label className="block mb-1">Start Time</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block mb-1">End Time</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-green-500 text-white rounded-md mb-2"
        >
          Create New Quote
        </button>
        <button
          onClick={onClose}
          className="w-full py-2 text-red-500 border border-red-500 rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewQuoteTitle;
