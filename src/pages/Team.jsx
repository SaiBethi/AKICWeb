import React from 'react';
import Card from '../components/Card';
import team from '../data/team';

const Team = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-4xl px-6 py-16">
        <h1 className="akic-heading mb-12">Meet the Team</h1>

        <div className="flex flex-col gap-10">
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
