import './Chatlist.scss';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import MessageIcon from '@mui/icons-material/Message';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React, { useState } from 'react';
import {
  useNavigate
} from "react-router-dom";
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addchat, removechat, changeId } from 'services/store/messenger'

export default function Chat({list}) {

  const dispatch = useDispatch();

  const [chatname, setChatname] = useState('');
  const theme = useTheme();
  const navigate = useNavigate();

  const add = (name) => {
    if (name === '') return;
    dispatch(addchat(name));
    setChatname('');
  }

  const remove = (id) => {
    dispatch(removechat(id));
  }
  
  return(
    <div>
      <Box sx={{
        width: '100%',
        maxWidth: 360,
        // @ts-ignore
        bgcolor: theme.background,
        borderRadius: 2 }}>
        <nav aria-label="main mailbox folders">
          <List>
            {
              list.map(el => (
                <ListItem disablePadding key={el.id} onClick={() => {
                  dispatch(changeId(el.id));
                  navigate(`${el.id}`, { replace: false });
                }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <MessageIcon/>
                    </ListItemIcon>
                    <ListItemText primary={el.name}/>
                    <ListItemIcon>
                      <DeleteForeverIcon className='delete' onClick={() => remove(el.id)}/>
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))
            }
          </List>
          <TextField
            label="Создать чат (Enter)"
            variant="outlined"
            // @ts-ignore
            onKeyDown={(e) => e.key === 'Enter' && add(e.target.value)}
            value={chatname}
            onChange={(event) => setChatname(event.target.value)}
          />
        </nav>
      </Box>
    </div>
  );
}