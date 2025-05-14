// tailwind.config.js
export default {
    darkMode: 'class', // ✅ Enables class-based dark mode
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [], // ✅ Leave empty or add other real Tailwind plugins only
  }
  