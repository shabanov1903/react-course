import './App.scss';
import Header from './components/header/Header';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
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
import { persistor } from './services/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import Contacts from 'components/contacts/Сontacts';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountFullDataThunk } from 'services/store/thunk/extraReducers';
import LoginView from 'components/login-view/Login-view';
import { Subscribe } from "@react-rxjs/core"

function App() {

  const [theme, setTheme] = useState(Themes.light);
  const dispatch = useDispatch();

  const userRedux = useSelector((state) => state.user.auth$);
  const subscribtion = userRedux?.subscribe(id => {
    if (id !== null) {
      setTimeout(() => dispatch(getAccountFullDataThunk(id)), 500);
    }
  })
  useEffect(() => {
    return () => subscribtion.unsubscribe();
  }, []);

  return (
    // <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header setTheme={setTheme}/>
        <Subscribe>
          <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/messenger/*" element={<Messenger/>}/>
            <Route path="/login" element={<LoginView/>}/>
          </Routes>
        </Subscribe>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
