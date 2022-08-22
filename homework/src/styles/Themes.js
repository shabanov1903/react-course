import { createTheme } from '@mui/material/styles';

export const light = createTheme({
    palette: {
        primary: {
            main: "#03a5fc",
        }
    },
    background: "#ffffff"
});

export const dark = createTheme({
    palette: {
        primary: {
            main: "#333232",
        }
    },
    background: "#b5b5b5"
});

export const Themes = {
    dark: dark,
    light: light
}