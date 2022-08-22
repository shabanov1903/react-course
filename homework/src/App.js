import './App.scss';
import Theme from './components/theme/Theme';
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

function App() {

  const [theme, setTheme] = useState(Themes.light);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Theme setTheme={setTheme}/>
        <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/messenger/*" element={<Messenger/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
