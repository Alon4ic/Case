import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                darks: '#191B1E',
                reds: '#CE0C0C',
                blacks: '#000000',
                grays: '#2F3136',
                maxDark: '#161617',
                bgDark: '#17181b',
                grayLight: '#E0E0E0',
                grayBox: '#212225',
            },
        },
    },
    plugins: [],
};
export default config;
