import React from 'react';
import PropTypes from 'prop-types';
import './Contact-card.scss';
import { Paper } from '@mui/material';

const ContactCard = ({contact}) => (
  <Paper elevation={3}>
    <div><strong>Имя: </strong>{contact.firstname}</div>
    <div><strong>Фамилия: </strong>{contact.lastname}</div>
    <div><strong>Почта: </strong>{contact.email}</div>
    <div><strong>Телефон: </strong>{contact.phone}</div>
    <div><strong>Дата рождения: </strong>{contact.birthday}</div>
    <div><strong>Пол: </strong>{contact.gender}</div>
  </Paper>
);
ContactCard.propTypes = {};

ContactCard.defaultProps = {};

export default ContactCard;
