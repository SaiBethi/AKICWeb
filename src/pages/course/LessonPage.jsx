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
  const correct = choice === sampleQuiz.answerIndex;

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white/10 rounded-2xl border border-white/10 backdrop-blur shadow-neon">
      <h2 className="text-2xl font-extrabold text-white mb-4 select-none">
        Unit {unitId} - Lesson {lessonId}
      </h2>
      <p className="text-gray-200 mb-6 select-none">
        Lesson content coming soon. Stay tuned for real-world investing insights!
      </p>

      <div className="pt-4 border-t border-white/20">
        <h3 className="text-xl font-semibold text-brandPurple mb-2 select-none">📋 Quick Quiz</h3>
        <p className="text-white select-none">{sampleQuiz.question}</p>
        {sampleQuiz.options.map((opt, idx) => (
          <label key={idx} className="block text-white cursor-pointer mt-2">
            <input
              type="radio"
              name="quiz"
              onChange={() => setChoice(idx)}
              className="mr-2 accent-brandPurple"
            />
            {opt}
          </label>
        ))}

        <button
          onClick={() => setSubmitted(true)}
          disabled={choice === null}
          className="mt-4 bg-brandPurple text-white py-2 px-5 rounded-lg hover:bg-pink-500 transition disabled:opacity-50"
        >
          Submit
        </button>

        {submitted && (
          <p className={`mt-3 font-semibold ${correct ? 'text-green-400' : 'text-red-400'}`}>
            {correct ? '✅ Correct!' : `❌ Incorrect. The answer is: ${sampleQuiz.options[sampleQuiz.answerIndex]}`}
          </p>
        )}
      </div>
    </div>
  );
};

export default LessonPage;
