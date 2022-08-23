import './App.scss';
import Header from './components/header/Header';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { Themes } from './styles/Themes';
import Messenger from 'components/messenger/Messenger';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profile from 'components/profile/Profile';
import Menu from 'components/menu/Menu';
import store from './services/store/store';
import { Provider } from 'react-redux';

function App() {

  const [theme, setTheme] = useState(Themes.light);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header setTheme={setTheme}/>
          <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/messenger/*" element={<Messenger/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
