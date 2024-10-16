module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensure all your component files are included
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // For form styling
  ],
}
