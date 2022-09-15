import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Profile.scss';
import Switch from '@mui/material/Switch';
import { check } from 'services/store/slices/profile';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';

const Profile = () => {
  let checked = useSelector((state) => state.profile.isCheck);
  const dispatch = useDispatch();
  
  const auth = useAuth();
  useEffect(() => auth.redirect(), [])

  return (
    <div className="Profile">
      <h2>Profile Component</h2>
      <Switch
        checked={checked}
        onChange={() => dispatch(check())}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </div>
)};

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
