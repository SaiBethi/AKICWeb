import React from 'react';
import Card from '../components/Card';
import team from '../data/team';

const Team = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <Card
              key={index}
              title={member.name}
              subtitle={member.role}
              description={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
