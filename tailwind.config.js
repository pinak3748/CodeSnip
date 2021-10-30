module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    dark: 'class',
    experimental: {
        darkModeVariant: true
    },
    theme: {
        extend: {
            fontFamily: {
                'Ubuntu': ['Ubuntu', 'sans_serif']
            },
            colors: {
                primary_text: '#fff',
                secondary_text: 'rgba(255, 255, 255, 0.7)',
                action_activ: '#fff',
                disabled_text: 'rgba(255, 255, 255, 0.5)',
                action_hover: 'rgba(255, 255, 255, 0.08)',
                action_selected: 'rgba(255, 255, 255, 0.16)',
                action_disabled: 'rgba(255, 255, 255, 0.3)',
                action_disabled_bg: 'rgba(255, 255, 255, 0.12)',
                primary_bg: ' #121212',
                secondary_bg: '#181818',
                section_bg: '#404040',
                section_secondary: '#282828',
                text_prime: ' #b3b3b3',
                divider: 'rgba(255, 255, 255, 0.12)',
                ghost: '#f8f8ff',
                rhythm: '#1f1f1f',
                thr_bg: '#212121',
                card_bg: '#121212',

            }
        },
        screens: {

            'xs': '0px',

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }

    },
    variants: {
        extend: {},
    },
    plugins: [],
}
