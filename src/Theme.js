// src/Theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6C63FF',
        },
        secondary: {
            main: '#F5F5F5',
        },
        background: {
            default: '#F5F5F5',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#333333',
            secondary: '#6C63FF',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h4: {
            fontWeight: 700,
        },
        h6: {
            fontWeight: 500,
        },
        body1: {
            fontWeight: 400,
        },
        button: {
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 15,
    },
});

export default theme;
