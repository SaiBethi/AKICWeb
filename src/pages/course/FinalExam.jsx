import React from 'react';
import finalExamData from '../course/coursedata/final_exam.json';

const FinalExam = () => (
  <div className="max-w-4xl mx-auto p-8 bg-white/10 border border-white/10 rounded-2xl backdrop-blur shadow-lg space-y-6 text-white">
    <h2 className="text-3xl font-extrabold select-none mb-4">🎓 Final Exam</h2>

    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold">Multiple Choice</h3>
        {finalExamData.multiple_choice.map((q, idx) => (
          <div key={idx} className="mb-4">
            <p className="font-medium">{idx + 1}. {q.question}</p>
            <ul className="list-disc pl-6">
              {q.choices.map((choice, i) => (
                <li key={i}>{choice}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-2xl font-bold">Free Response</h3>
        {finalExamData.free_response.map((frq, idx) => (
          <p key={idx} className="mb-3">📝 {frq.prompt}</p>
        ))}
      </div>
    </div>
  </div>
);

export default FinalExam;
