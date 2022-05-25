import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base.scss';
import App from './App';
import ThemeProvider from './provider/ThemeProvider'


ReactDOM.render(
  
      <ThemeProvider>
        <App/>,
      </ThemeProvider>,
    
  
  document.getElementById('root')
);

