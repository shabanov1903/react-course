import React from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div className="Menu">
    <Link to="/profile">
      <Card sx={{ width: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="275"
            image="https://www.kindpng.com/picc/m/52-526237_avatar-profile-hd-png-download.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='card-header'>
              Профиль
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
    <Link to="/contacts">
      <Card sx={{ width: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="275"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJTUKJF559kU0N4E_fS1dEyIPSUGWT64XQw&usqp=CAU"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='card-header'>
              Контакты
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
    <Link to="/messenger">
      <Card sx={{ width: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="275"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYz5W05Hsf95PqGfxZ-pRfaph3s0lc42aBgA&usqp=CAU"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='card-header'>
              Мессенджер
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  </div>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
