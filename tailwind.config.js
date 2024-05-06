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
        fontSize: {
            sm: ['16px', '28px'],
            base: ['18px', '30px'],
            lg: ['24px', '36px'],
            h5: ['18px', '22px'],
            h4: ['22px', '24px'],
            h3: ['26px', '32px'],
            h2: ['44px', '54px'],
            h1: ['50px', '58px'],
            display: ['86px', '86px'],
            big: ['240px', '190px']
        },
        extend: {
            colors: {
                primary: "#ff5935",
                secondary: "#fcb01e",
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
                red_hat: ['Red Hat Display Variable', 'sans-serif'],
                homemade: ['Homemade Apple', 'cursive'],
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
