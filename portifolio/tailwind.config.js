/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
        primary: '#3B82F6',       // Azul principal
        primaryDark: '#1E40AF',   // Azul escuro
        secondary: '#F3F4F6',     // Cinza claro
        accent: '#F97316',        // Laranja vibrante
        textPrimary: '#374151',   // Cinza escuro para textos
        white: '#FFFFFF',
      }
    },
  },
  plugins: [],
}
