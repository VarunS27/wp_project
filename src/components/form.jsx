import React, { useState } from "react";

function InputForm() {
  const [input, setInput] = useState("");       // To hold current input value
  const [submitted, setSubmitted] = useState(""); // To hold submitted value

  const handleSubmit = () => {
    setSubmitted(input);      // Set the submitted value to show as output
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Input Form</h2>
            <p className="text-gray-600">Enter your information below</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Enter something:
              </label>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type here..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400 bg-white"
              />
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full bg-black text-white font-semibold py-3 px-6 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Submit
            </button>
          </div>

          {submitted && (
            <div className="mt-8 p-6 bg-gray-900 rounded-xl border-l-4 border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                You submitted:
              </h3>
              <p className="text-gray-200 bg-gray-800 p-3 rounded-lg font-mono break-words">
                {submitted}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InputForm;