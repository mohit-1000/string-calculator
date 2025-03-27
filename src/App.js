import "./App.css";
import React, { useState } from "react";
import { calculateSum } from "./Utils";
export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    if (!input.trim()) {
      setError("Please enter numbers");
      setResult(0);
      return;
    }
    try {
      const sum = calculateSum(input);
      setResult(sum);
      setError("");
    } catch (err) {
      setError(err.message);
      setResult(0);
    }
  };

  const handleReset = () => {
    setInput("");
    setResult(0);
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">String Calculator</h1>
        <input
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter numbers"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
          onClick={handleCalculate}
        >
          Calculate
        </button>
        {error && <div className="mt-4 text-red-600 font-bold">{error}</div>}
        <div className="mt-4 text-green-600 font-bold">Result: {result}</div>
        <button
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded w-full hover:bg-gray-600"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
