module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px+',
        },
        extend: {
            colors: {
                brightRed: 'hsl(12,88%,59%)',
                brightRedLight: 'hsl(12,88%,69%)',
                brightRedSupLight: 'hsl(12,88%,95%)',
                darkBlue: 'hsl(228,39%,23%)',
                darkGrayishBlue: 'hsl(227,12%,61%)',
                veryPaleRed: 'hsl(13,100%,96%)',
                veryLightGray: 'hsl(0,0%, 98%)',
                blue: '#1fb6ff',
                white: '#fff',
                pink: '#ff49db',
                orange: '#ff7849',
                aliceblue: '#F0F8FF',
                lightgray: '#D3D3D3',
                chocolate: '#D2691E',
                green: '#13ce66',
                'gray-dark': '#273444',
                gray: '#8492a6',
                'gray-light': '#d3dce6',
            },
        },
    },
    plugins: [],
}