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

export default function Chat({list, change}) {

  const [chatname, setChatname] = useState('');
  const theme = useTheme();
  const navigate = useNavigate();

  const add = (name) => {
    if (chatname === '') return;
    let max = Math.max(...list.map(x => x.id));
    isFinite(max) ? max = max : max = 0;
    change(state => [...state, {
      id: max + 1,
      name: name
    }]);
    setChatname('');
  }

  const remove = (id) => {
    const pos = list.findIndex(x => x.id === id);
    change(state => {
      state.splice(pos, 1);
      return state;
    });
  }
  

  return(
    <div>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: theme.background, borderRadius: 2 }}>
        <nav aria-label="main mailbox folders">
          <List>
            {
              list.map(el => (
                <ListItem disablePadding key={el.id} onClick={() => navigate(`${el.id}`, { replace: false })}>
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
            onKeyDown={(e) => e.key === 'Enter' && add(e.target.value)}
            value={chatname}
            onChange={(event) => setChatname(event.target.value)}
          />
        </nav>
      </Box>
    </div>
  );
}