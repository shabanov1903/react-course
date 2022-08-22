import './Theme.scss'
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { Themes, dark, light } from '../../styles/Themes';

export default function Theme({setTheme}) {
    return(
      <div className='theme-container'>
        <Button
            variant="text"
            onClick={() => setTheme(Themes.dark)}
            className="check-theme-button"
            sx={{color: dark.palette.primary.main}}><Brightness4Icon/></Button>
        <Button
            variant="text"
            onClick={() => setTheme(Themes.light)}
            className="check-theme-button"
            sx={{color: light.palette.primary.main}}><Brightness5Icon/></Button>
      </div>
    );
  }