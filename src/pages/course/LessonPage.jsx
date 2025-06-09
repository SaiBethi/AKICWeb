import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import lessonsData from '../course/coursedata/lessons.json';

const LessonPage = () => {
  const { unitId, lessonId } = useParams();
  const lesson = lessonsData[unitId]?.lessons?.[lessonId - 1];
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswer = (qIndex, choiceIndex) => {
    setSelectedAnswers({ ...selectedAnswers, [qIndex]: choiceIndex });
  };

  const calculateScore = () => {
    const correct = lesson.quiz.reduce((acc, q, i) => {
      if (selectedAnswers[i] === q.answer) return acc + 1;
      return acc;
    }, 0);
    setScore(correct);
  };

  return lesson ? (
    <div className="max-w-4xl mx-auto p-8 bg-white/10 border border-white/10 rounded-2xl backdrop-blur shadow-lg space-y-6">
      <h2 className="text-3xl font-extrabold text-white select-none">{lesson.title}</h2>
      <p className="text-gray-300 whitespace-pre-line">{lesson.content}</p>

      <div className="pt-6">
        <h3 className="text-xl font-bold text-white mb-4">Quiz</h3>
        {lesson.quiz.map((q, idx) => (
          <div key={idx} className="mb-4 text-white">
            <p className="font-medium">{idx + 1}. {q.question}</p>
            <ul className="pl-4 list-disc">
              {q.choices.map((choice, i) => (
                <li key={i}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`q-${idx}`}
                      value={i}
                      checked={selectedAnswers[idx] === i}
                      onChange={() => handleAnswer(idx, i)}
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
          Submit Quiz
        </button>
        {score !== null && (
          <p className="mt-4 text-white text-lg font-semibold">
            You got {score} out of {lesson.quiz.length} correct.
          </p>
        )}
      </div>
    </div>
  ) : (
    <div className="text-center p-8 text-white select-none">Lesson not found.</div>
  );
};

export default LessonPage;
