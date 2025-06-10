import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import testData from './coursedata/unittests.json';

const UnitTest = () => {
  const { unitId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    if (testData[unitId]) {
      setQuestions(testData[unitId]);
    }
  }, [unitId]);

  const handleAnswer = (qIndex, choiceIndex) => {
    setAnswers({ ...answers, [qIndex]: choiceIndex });
  };

  const calculateScore = () => {
    const correct = questions.reduce((acc, q, i) => {
      if (answers[i] === q.answer) return acc + 1;
      return acc;
    }, 0);
    setScore(correct);
  };

  return (
    <div className="select-none max-w-3xl mx-auto p-8 bg-white/10 backdrop-blur rounded-xl border border-white/10 shadow-lg text-center space-y-6">
      <h2 className="text-3xl font-extrabold text-white select-none">
        📘 Unit {unitId} Test
      </h2>
      <p className="text-gray-300 select-none">
        Ready to test what you’ve learned? Try the questions below.
      </p>

      <div className="select-none text-left space-y-6 mt-8">
        {questions.map((q, index) => (
          <div key={index} className="bg-white/5 p-4 rounded-lg border select-none border-white/10">
            <h3 className="text-white font-semibold mb-2 select-none">
              {index + 1}. {q.question}
            </h3>
            <ul className="select-none space-y-1">
              {q.choices.map((choice, i) => (
                <li key={i} className="text-gray-200 select-none">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`q-${index}`}
                      value={i}
                      checked={answers[index] === i}
                      onChange={() => handleAnswer(index, i)}
                      className="accent-brandPurple"
                    />
                    <span>{choice}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button
          onClick={calculateScore}
          className="mt-4 px-4 py-2 bg-brandPurple text-white font-semibold rounded hover:bg-opacity-80"
        >
          Submit Test
        </button>
        {score !== null && (
          <p className="mt-4 text-white text-lg font-semibold">
            You got {score} out of {questions.length} correct.
          </p>
        )}
      </div>
    </div>
  );
};

export default UnitTest;
