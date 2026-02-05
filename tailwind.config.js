export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                space: {
                    900: '#0B0D17', // Deep cosmos
                    800: '#151932', // Void
                    100: '#D0D6F9', // Starlight
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Orbitron', 'sans-serif'], // Assuming we might add this font later
            }
        },
    },
    plugins: [],
}
