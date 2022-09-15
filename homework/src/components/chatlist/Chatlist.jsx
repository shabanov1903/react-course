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
import { changeId } from 'services/store/slices/messenger'
import { useSelector, useDispatch } from 'react-redux';
import { addChatThunk, deleteChatThunk } from 'services/store/thunk/extraReducers';
import { useAuth } from 'hooks/useAuth';

export default function Chat({list}) {
  const auth = useAuth();

  const dispatch = useDispatch();
  let chatIdRedux = useSelector((state) => state.messenger.chatId);

  const [chatname, setChatname] = useState('');
  const theme = useTheme();
  const navigate = useNavigate();

  const add = (name) => {
    if (name === '') return;
    dispatch(addChatThunk({
      chatName: name,
      accountId: auth.id
    }));
    setChatname('');
  }

  const remove = (id) => {
    dispatch(deleteChatThunk(id));
  }
  
  return(
    <div>
      <Box sx={{
        width: '100%',
        maxWidth: 360,
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
                      <DeleteForeverIcon className='delete' onClick={(event) => {
                        event.stopPropagation();
                        remove(el.id);
                        if (chatIdRedux === el.id) navigate(``, { replace: false });
                      }}/>
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