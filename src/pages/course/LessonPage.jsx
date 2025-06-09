import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const sampleQuiz = {
  question: "What is a balance sheet?",
  options: [
    "A record of income & expenses",
    "A statement of assets, liabilities, equity",
    "A report of stock orders",
    "None of the above"
  ],
  answerIndex: 1
};

const LessonPage = () => {
  const { unitId, lessonId } = useParams();
  const [choice, setChoice] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const correct = choice == sampleQuiz.answerIndex;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">
        Unit {unitId} - Lesson {lessonId}
      </h2>
      <p className="text-gray-600">Lesson content goes here...</p>

      <div className="border-t pt-4">
        <h3 className="font-semibold">Quick Quiz</h3>
        <p>{sampleQuiz.question}</p>
        {sampleQuiz.options.map((opt, idx) => (
          <label key={idx} className="block">
            <input
              type="radio"
              name="quiz"
              onChange={() => setChoice(idx)}
              className="mr-2"
            />
            {opt}
          </label>
        ))}
        <button
          onClick={() => setSubmitted(true)}
          disabled={choice === null}
          className="mt-2 bg-purple-600 text-white py-1 px-3 rounded disabled:opacity-50"
        >
          Submit
        </button>
        {submitted && (
          <p className={`mt-2 ${correct ? 'text-green-600' : 'text-red-600'}`}>
            {correct ? 'Correct!' : `Incorrect. The answer is: ${sampleQuiz.options[sampleQuiz.answerIndex]}`}
          </p>
        )}
      </div>
    </div>
  );
};

export default LessonPage;
