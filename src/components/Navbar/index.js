import { FormControlLabel, styled, Switch } from '@mui/material';
import './index.scss';
import Btn from '../Button';
import { useEffect, useState } from 'react';


function Navbar() {

  // Switch component from Mui
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 70,
    height: 40,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(8px)',
      '&.Mui-checked': {
        color: 'black',
        transform: 'translateX(35px)',
        '& .MuiSwitch-thumb:before': {
          content:'"En"',
          borderRadius: 15
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          border: "1px solid white",
          borderRadius: 15,
          backgroundColor: 'transparent',
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
      backgroundColor:"white",
      '&::before': {
        content: "'De'",
        fontFamily: "Poppins, serif",
        fontWeight: 400,
        position: 'relative',
        top: 6,
        left: 5,
        color: "white",
      },
      backgroundColor: '#ffffff',
      // backdropFilter: `blur(25px)`,
      borderRadius: 20,
      ...theme.applyStyles('dark', {
        backgroundColor: '#8796A5',
      }),
    },
  }));

  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const landingSection = document.getElementById('landing');
            const navbar = document.querySelector('nav');

            if (landingSection) {
                const mainBottom = landingSection.offsetTop + landingSection.offsetHeight;
                const scrollTop = window.scrollY;

                if (scrollTop > mainBottom) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <nav className={isScrolled ? 'backgroundNav' : ''}>
      <div id='navbar'>
          <div className='logo'>
            IndoTravi
          </div>
          <div className='links notForMobile'>
            <a href='#bestLocation' className='nav-poppins'>About</a>
            <a href='#bestLocation' className='nav-poppins'>How it Works?</a>
            <a href='#bestLocation' className='nav-poppins'>Tour Packages</a>
            <a href='#bestLocation' className='nav-poppins'>Services</a>
            <a href='#bestLocation' className='nav-poppins'>Contact</a>
          </div>
          <div className='nav-right notForMobile'>
            <div className='languageChange'>
              <FormControlLabel
                control={<MaterialUISwitch className='switch' sx={{ m: 1 }} defaultChecked/>}
              />
            </div>
            <Btn text="Login" size="btn-medium" colour="white" textCol="black"/>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;