/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            colors: {
                muted: {
                    800: "#1b1b1f",
                    700: "#37373d",
                    600: "#626267",
                    500: "#8f8f94",
                    400: "#c4c4c8",
                    300: "#e6e6e8",
                    200: "#f8f8f8",
                }
            },
            fontFamily: {
                red_hat: ['Red Hat Display', 'sans-serif'],
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
