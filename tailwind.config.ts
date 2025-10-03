
import {type Config} from 'tailwindcss';

const config: Config = {

    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container:{
            center:true,
            padding:'16px',
            screens:{
                '2xl':'1400px'
            }
        },
        extend: {
            colors:{    
                primary: '#1DA1F2',
                secondary: '#14171A',
                accent: '#F5F8FA',
            }

        },

    },
    plugins: []

} satisfies Config;


export default config;