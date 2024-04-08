/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'small': '370px',
      'medium': '760px',
      'large': '1200px',
    },
    colors: {
      'White': '#FFFFFF',
      'Cream': '#F6F1EE',
      'Black': '#000000',
    },
    extend: {
      scale: {
        "200": "2.0",
        "210": "2.1",
      }
    }
  },
  plugins: []
};
