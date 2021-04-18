import * as React from 'react';
import './App.css';
import {theme} from './theme/theme';
import { ThemeProvider } from 'theme-ui';
import Header from './components/Header/Header';

const  App = () => {
  return (
    <>
    <ThemeProvider theme={ theme } >
      <Header />
    </ThemeProvider>
    </>
  )
}


export default App;

