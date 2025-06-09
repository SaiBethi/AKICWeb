module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brandPurple: '#8e2de2',
        brandPink: '#ff6ec4',
        deepGray: '#1a1a1a',
      },
      boxShadow: {
        neon: '0 0 15px rgba(142,45,226,0.7)',
      },
      backgroundImage: {
        gradientTech:
          'linear-gradient(135deg, rgba(142,45,226,0.85) 0%, rgba(255,110,196,0.75) 100%)',
      },
    },
  },
  plugins: [],
};
