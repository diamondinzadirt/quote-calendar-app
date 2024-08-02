import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TimePicker from "../components/UI/TimePicker";

const NewQuote = () => {
  const [quoteTitle, setQuoteTitle] = useState("");
  const [quoteTime, setQuoteTime] = useState(new Date().toISOString()); // Initialize with current time in ISO format
  const [sectionLabel, setSectionLabel] = useState("");
  const [basis, setBasis] = useState("");
  const [unitOfMeasure, setUnitOfMeasure] = useState("");
  const [unit, setUnit] = useState("");
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  const navigate = useNavigate();

  const handleSaveQuote = () => {
    // Implement save quote logic here
  };

  const handleCancel = () => {
    if (window.confirm("You will lose all the data inputted if you cancel")) {
      navigate("/");
    }
  };

  const handleDateChange = (date: string) => {
    setQuoteTime(date); // Update the state with the new date string
  };

  return (
    <>
      <TimePicker initialDate={quoteTime} onChange={handleDateChange} />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <div className="mb-6">
            <button onClick={() => navigate("/")} className="text-blue-500">
              &lt; Back to quotes
            </button>
          </div>
          <h1 className="text-2xl font-semibold mb-4">Add New Quote</h1>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Quote Title</h2>
            <input
              type="text"
              value={quoteTitle}
              onChange={(e) => setQuoteTitle(e.target.value)}
              className="w-full border rounded px-4 py-2"
              placeholder="Quote Title Here"
            />
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Change Quote Time</h2>
            <input
              type="text"
              value={quoteTime}
              onChange={(e) => setQuoteTime(e.target.value)}
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Section Label</h2>
            <input
              type="text"
              value={sectionLabel}
              onChange={(e) => setSectionLabel(e.target.value)}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter Section Label"
            />
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Basis</h2>
            <input
              type="text"
              value={basis}
              onChange={(e) => setBasis(e.target.value)}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter Basis"
            />
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Unit of Measure</h2>
            <input
              type="text"
              value={unitOfMeasure}
              onChange={(e) => setUnitOfMeasure(e.target.value)}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter Unit of Measure"
            />
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Unit</h2>
            <input
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter Unit"
            />
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Rate</h2>
            <input
              type="text"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter Rate"
            />
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Amount</h2>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter Amount"
            />
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Section Currency</h2>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full border rounded px-4 py-2"
            >
              <option value="USD">USD</option>
              <option value="NGN">NGN</option>
            </select>
            <div className="mt-2">
              <span>Currency & Rate</span>
              <div className="flex items-center mt-1">
                <img
                  src={`https://flagcdn.com/24x18/${
                    currency === "USD" ? "us" : "ng"
                  }.png`}
                  alt="flag"
                  className="mr-2"
                />
                <span>{currency === "USD" ? "$" : "₦"}1 = ₦1,119.53</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleCancel}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveQuote}
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Save Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewQuote;
