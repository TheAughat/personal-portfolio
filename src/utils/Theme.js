import { createTheme } from '@mui/material';
import './style.css';

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: 'rgb(1, 116, 250)',
            dark: 'rgb(60, 108, 130)',
            light: 'rgb(88, 151, 176)'
        },
        secondary: {
            main: '#03e9f4',
            dark: 'rgb(78, 128, 161)',
            // light: ''
        }
    },
    typography: {
        fontFamily: 'Orbitron, Consolas, sans-serif'
    }
});
