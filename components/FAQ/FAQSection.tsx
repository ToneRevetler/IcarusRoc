import React from 'react';
import Question from './Question';

const faqs = [
  {
    question: 'What is Icarus Roc?',
    answer: 'Icarus Roc is a platform that provides ...',
  },
  {
    question: 'How do I get started?',
    answer: 'To get started, simply sign up and ...',
  },
  {
    question: 'Is there customer support?',
    answer: 'Yes, we offer 24/7 customer support ...',
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className=" mx-auto flex justify-center bg-gray-300 mb-10 pb-20 pt-4 ">
      <div className='max-w-7xl w-full container px-4 md:px-0 lg:px-8'>
        <h2 className="text-3xl text-center font-bold my-8 text-icarus-dark-blue">Frequently Asked Questions</h2>
        <div className='gap-4 grid'>
          {faqs.map((faq, idx) => (
            <Question key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
