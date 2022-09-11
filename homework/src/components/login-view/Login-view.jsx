import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Login-view.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createUserThunk, loginThunk } from 'services/store/thunk/extraReducers';
import { useNavigate } from 'react-router-dom';

const LoginView = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
 
  const dispatch = useDispatch();

  const userRedux = useSelector((state) => state.user.auth$);
  const subscribtion = userRedux?.subscribe(id => {
    if (id) {
      navigate('/');
    }
  })

  useEffect(() => {
    return () => subscribtion.unsubscribe();
  }, []);

  return (
    <div className='container'>
      <h1>Войдите в свой аккаунт</h1>

      <div className='card'>
          <input 
          type = 'text'
          placeholder = 'email'
          value={email}
          onChange = {(e) => setEmail(e.target.value)}/>

          <input 
          type = 'password'
          placeholder = 'password'
          value={pass}
          onChange = { (e) => setPass(e.target.value)}/>

          <div className='button-container'>
              <button onClick={() => {
                  dispatch(createUserThunk({email, pass}));
                  navigate('/');
                }
              }
              className='auth-button'
              >Регистрация</button>

              <button onClick={() => {
                  dispatch(loginThunk({email, pass}));
                }
              }
              className='auth-button'
              >Войти</button>
          </div>
      </div>
    </div>
  )
}

LoginView.propTypes = {};

LoginView.defaultProps = {};

export default LoginView;
