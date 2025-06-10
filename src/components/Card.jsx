import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, subtitle, description, image, link }) => {
  return (
    <div className="select-none flex flex-col lg:flex-row items-center bg-white/10 backdrop-blur-md shadow-neon border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
      {image && (
        <img
          src={image}
          alt={title}
          className="select-none w-40 h-40 object-cover rounded-full lg:mr-8 mb-6 lg:mb-0 border-2 border-purple-400 shadow-lg"
        />
      )}

      <div className="text-center lg:text-left flex-1">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

        {subtitle && (
          <p className="text-md text-brandPink font-semibold mb-3 select-none">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="text-sm text-gray-300 leading-relaxed select-none">
            {description}
          </p>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-brandPurple hover:text-brandPink font-medium transition-colors"
          >
            Learn more →
          </a>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
};

export default Card;
