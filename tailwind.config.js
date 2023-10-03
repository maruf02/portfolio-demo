/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 120s linear infinite',
            }
        },
    },
    plugins: [],
}