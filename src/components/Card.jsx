import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, subtitle, description, image, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        {subtitle && <p className="text-sm text-purple-700 font-medium mb-2">{subtitle}</p>}
        {description && <p className="text-sm text-gray-600">{description}</p>}
        
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm text-purple-600 hover:text-purple-800 font-medium"
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
  link: PropTypes.string
};

export default Card;
