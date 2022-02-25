import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/sharp-sans/sharpsans.css';
import './fonts/metropolis/metropolis.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Footer from './components/footer'
import Content from './components/content'
import { ThemeProvider } from './components/scripts/ThemeContext';
import Background from "./components/scripts/Background";

// Der Provider ist wichtig für das Tooltip, sonnst werden keine angezeigt!
import { Provider, defaultTheme } from '@adobe/react-spectrum';

ReactDOM.render(
     <ThemeProvider>
      <Background>
        <Header />
        <Content />
        <Footer />
      </Background>
    </ThemeProvider>,
  document.getElementById('content')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();