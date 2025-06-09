import React from 'react';
import { useParams } from 'react-router-dom';

const UnitTest = () => {
  const { unitId } = useParams();
  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-semibold">Unit {unitId} Test</h2>
      <p className="text-gray-600">[Placeholder test content here]</p>
    </div>
  );
};

export default UnitTest;
