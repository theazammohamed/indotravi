import { FormControlLabel, styled, Switch } from '@mui/material';
import Button from '../Button';
import './index.scss';


function Navbar() {

  // Switch component from Mui
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 70,
    height: 41,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(8px)',
      '&.Mui-checked': {
        color: 'black',
        transform: 'translateX(35px)',
        '& .MuiSwitch-thumb:before': {
          content:'"En"'
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#aab4be',
          ...theme.applyStyles('dark', {
            backgroundColor: '#8796A5',
          }),
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#ffffff',
      width: 25,
      height: 25,
      position: 'relative',
      top: 7,
      '&::before': {
        content: "'De'",
        fontFamily: "Poppins, serif",
        fontWeight: 400,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',   
        color: 'black',     
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      '&::before': {
        content: "'De'",
        fontFamily: "Poppins, serif",
        fontWeight: 400,
        position: 'relative',
        top: 6,
        left: 5,
        color: "white",
      },
      backgroundColor: '#aab4be',
      backdropFilter: `blur(25px)`,
      borderRadius: 20,
      ...theme.applyStyles('dark', {
        backgroundColor: '#8796A5',
      }),
    },
  }));

  return (
    <nav>
      <div id='navbar'>
          <div className='logo'>
            IndoTravi
          </div>
          <div className='links'>
            <a href='#' className='nav-poppins'>About</a>
            <a href='#' className='nav-poppins'>How it Works?</a>
            <a href='#' className='nav-poppins'>Tour Packages</a>
            <a href='#' className='nav-poppins'>Services</a>
            <a href='#' className='nav-poppins'>Contact</a>
          </div>
          <div className='nav-right'>
            <div className='languageChange'>
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked/>}
              />
            </div>
            <Button text="Login" size="btn-medium" colour="white" textCol="black"/>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;