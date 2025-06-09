import React from 'react';
import { useParams } from 'react-router-dom';

const UnitTest = () => {
  const { unitId } = useParams();

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white/10 backdrop-blur rounded-xl border border-white/10 shadow-lg text-center space-y-4">
      <h2 className="text-3xl font-extrabold text-white select-none">
        📘 Unit {unitId} Test
      </h2>
      <p className="text-gray-300 select-none">
        Ready to test what you’ve learned in this unit? Your challenge begins here.
      </p>
    </div>
  );
};

export default UnitTest;
