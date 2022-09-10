import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Сontacts.scss';
import { thunkDispatch } from '../../services/store/thunk/thunk'
import { contactsData } from '../../services/store/thunk/contactsData'
import { useSelector, useDispatch } from 'react-redux';
import ContactCard from 'components/contact-card/Contact-card';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Contacts = () => {

  const [quantity, setQuantity] = useState('15');
  // @ts-ignore
  const dispatch = useDispatch();
  // @ts-ignore
  let contactsListRedux = useSelector((state) => state.contacts.contactList);

  const click = () => dispatch(thunkDispatch(contactsData(quantity)));

  return (
    <div>
      <div className="contacts">
      <TextField
          label="Кол-во"
          variant="outlined"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          sx={{
            width: 100
          }}
          />
      <Button variant="outlined" endIcon={<SendIcon/>} onClick={click} sx={{ height: 30 }}>Запрос</Button>
      </div>      
      <div className="contacts">
      {
        contactsListRedux?.map(contact => {
          return (
            <ContactCard key={contact.id} contact={contact}/>
          )
        })
      }
      </div>
    </div>
)};

Contacts.propTypes = {};

Contacts.defaultProps = {};

export default Contacts;
