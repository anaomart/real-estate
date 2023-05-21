/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1f3e72',
                secondary: 'rgba(255,255,255,0.78)',
                black: '#131110',
                blue: '#4066ff',
                lightBlue: '#eeeeff',
                blueGradient: 'linear-gradient(97.05deg ,#4066ff  3.76%, #2949c6 100%)',
                orangeGradient: 'linear-gradient(270deg ,#ffb978  0%, #ff922d 100%)',
            },
            boxShadow: {
                normal: '0px 23px 21px -8px rgba(136,160,255,0.25)'
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif']
            }
        },
    },
    plugins: [],
}