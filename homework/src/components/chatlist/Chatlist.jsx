import './Chatlist.scss';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import MessageIcon from '@mui/icons-material/Message';

export default function Chat({list}) {

  const theme = useTheme();

  return(
    <div>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: theme.background, borderRadius: 2 }}>
        <nav aria-label="main mailbox folders">
          <List>
            {
              list.map(el => (
                <ListItem disablePadding key={el.id}>
                  <ListItemButton>
                    <ListItemIcon>
                      <MessageIcon/>
                    </ListItemIcon>
                    <ListItemText primary={el.name}/>
                  </ListItemButton>
                </ListItem>
              ))
            }
          </List>
        </nav>
      </Box>
    </div>
  );
}