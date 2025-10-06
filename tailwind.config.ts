import { type Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
  darkMode: "class",
 content: [
    './*.html', // Adjust this to match your project structure
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // Define the color palette from the UI designs
      colors: {
        'brand-background': '#F8F9FA', // Light grey background
        'brand-surface': '#FFFFFF', // Card background
        'brand-text': '#111827',     // Dark text for headings
        'brand-subtext': '#6B7280', // Lighter text for links/subtitles
        'brand-primary': {
          DEFAULT: '#3B82F6', // Blue for links and focus rings
          light: '#60A5FA',
        },
        'brand-accent': {
          start: '#3B82F6', // Gradient start (blue)
          end: '#8B5CF6',   // Gradient end (purple)
        },
        'brand-orange': {
          start: '#F97316', // Gradient start (orange)
          end: '#EA580C',   // Gradient end (darker orange)
        }
      },
      // Use a clean, modern sans-serif font like Inter
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      // Add a custom soft box-shadow
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
} satisfies Config;

export default config;