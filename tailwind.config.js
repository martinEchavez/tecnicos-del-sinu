/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './JS/main.js'],
    theme: {
        extend: {
            colors: {
                primary: '#0E5A8A',
                'primary-dark': '#0A4268',
                'primary-light': '#E8F1F7',
                accent: '#F28C28',
                'accent-dark': '#D9741A',
                whatsapp: '#25d366',
            }
        }
    }
};
