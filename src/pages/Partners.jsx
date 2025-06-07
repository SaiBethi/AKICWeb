import React from 'react';
import Card from '../components/Card';
import partners from '../data/partners';

const Partners = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              title={partner.name}
              description={partner.description}
              image={partner.logo}
              link={partner.website}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
