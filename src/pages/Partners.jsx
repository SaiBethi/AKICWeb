import React from 'react';
import Card from '../components/Card';
import partners from '../data/partners';

const Partners = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-6xl px-6 py-10 text-center">
        <h1 className="akic-heading">Our Partners</h1>
        <div className="flex flex-wrap justify-center gap-6">
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
