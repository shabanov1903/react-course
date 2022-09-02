import React from 'react';
import PropTypes from 'prop-types';
import './Profile.scss';
import Switch from '@mui/material/Switch';
import { check } from 'services/store/profile';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
  // @ts-ignore
  let checked = useSelector((state) => state.profile.isCheck);
  // @ts-ignore
  const dispatch = useDispatch();

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
