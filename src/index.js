import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import './index.css';
import App from './App';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#A3C7ED',
            main: '#245CA6',
            dark: '#212445'
         },
         secondary: {
           main: '#241F21',
         },
    },
    typography: { 
       useNextVariants: true
    }
 });


ReactDOM.render(
       <MuiThemeProvider theme = { theme }>
           <App />
       </MuiThemeProvider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

