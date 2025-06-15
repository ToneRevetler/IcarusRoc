'use client'

import React, { useState } from 'react';

interface QuestionProps {
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-white rounded-lg'>
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none bg-white rounded-lg p-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-icarus-dark-blue">{question}</span>
        <span className="ml-2 text-xl text-icarus-dark-blue">{open ? '-' : '+'}</span>
      </button>
      {open && (
        <div className=" text-gray-600 transition-all duration-300 px-4 pb-4">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Question;
