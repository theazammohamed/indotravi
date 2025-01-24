import { FormControlLabel, styled, Switch } from '@mui/material';
import './index.scss';
import Btn from '../Button';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Facebook, Instagram, YouTube } from '@mui/icons-material';

gsap.registerPlugin(useGSAP);

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

  // GSAP Animations
  const { contextSafe } = useGSAP();

  const onEnter = contextSafe(({}) => {
    let tl = gsap.timeline();

    tl.to("#navSlide", { xPercent: "-100", duration: 0.5, ease: "expo.out" });
    tl.to(".backdrop", { opacity: 1, duration: 0.5 }, "<");
  });

  const onExit = contextSafe(({}) => {
    gsap.to("#navSlide", { xPercent: "100", duration: 0.3 });
    gsap.to(".backdrop", { opacity: 0 });
  });

  return (
    <>
      <nav className={isScrolled ? 'backgroundNav' : ''}>
      <div id='navbar'>
          <div className='logo'>
            IndoTravi
          </div>
          <MenuIcon className={`notForDesktop colorChange ${isScrolled ? 'backgroundNav' : ''}`} onClick={onEnter} sx={{color: "white"}}/>
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
      <div id="navSlide" className={`notForDesktop ${isScrolled ? 'backgroundNav' : ''}`}>
        <div className="backdrop" onClick={onExit}></div>
        <div className="navigation">
          <div className="stopCTA">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              onClick={onExit}
            >
              <rect width="35" height="35" rx="17.5" fill="white" />
              <path
                d="M23.8 11.21C23.7075 11.1173 23.5976 11.0437 23.4766 10.9935C23.3556 10.9434 23.226 10.9175 23.095 10.9175C22.964 10.9175 22.8343 10.9434 22.7134 10.9935C22.5924 11.0437 22.4825 11.1173 22.39 11.21L17.5 16.09L12.61 11.2C12.5174 11.1074 12.4075 11.034 12.2865 10.9839C12.1656 10.9337 12.0359 10.908 11.905 10.908C11.7741 10.908 11.6444 10.9337 11.5235 10.9839C11.4025 11.034 11.2926 11.1074 11.2 11.2C11.1074 11.2926 11.034 11.4025 10.9839 11.5234C10.9338 11.6444 10.908 11.774 10.908 11.905C10.908 12.0359 10.9338 12.1656 10.9839 12.2865C11.034 12.4075 11.1074 12.5174 11.2 12.61L16.09 17.5L11.2 22.39C11.1074 22.4826 11.034 22.5925 10.9839 22.7134C10.9338 22.8344 10.908 22.964 10.908 23.095C10.908 23.2259 10.9338 23.3556 10.9839 23.4765C11.034 23.5975 11.1074 23.7074 11.2 23.8C11.2926 23.8926 11.4025 23.966 11.5235 24.0161C11.6444 24.0662 11.7741 24.092 11.905 24.092C12.0359 24.092 12.1656 24.0662 12.2865 24.0161C12.4075 23.966 12.5174 23.8926 12.61 23.8L17.5 18.91L22.39 23.8C22.4826 23.8926 22.5925 23.966 22.7135 24.0161C22.8344 24.0662 22.9641 24.092 23.095 24.092C23.2259 24.092 23.3556 24.0662 23.4765 24.0161C23.5975 23.966 23.7074 23.8926 23.8 23.8C23.8926 23.7074 23.966 23.5975 24.0161 23.4765C24.0662 23.3556 24.092 23.2259 24.092 23.095C24.092 22.964 24.0662 22.8344 24.0161 22.7134C23.966 22.5925 23.8926 22.4826 23.8 22.39L18.91 17.5L23.8 12.61C24.18 12.23 24.18 11.59 23.8 11.21Z"
                fill="black"
              />
            </svg>
          </div>
          <div className='nav'>
            <a href="/How-to-book">How to book?</a>
            <a href="/Register-your-futsal">Register Your Futsal</a>
            <a href="/FAQ">FAQ</a>
          </div>
          <div className="socialMedia">
            Follow us on
            <div className="icons">
              <Instagram sx={{ fontSize: 30, color: "white",  padding: "5px" }}/>
              <Facebook sx={{ fontSize: 30, color: "white", padding: "5px"  }}/>
              <YouTube sx={{ fontSize: 30, color: "white", padding: "5px"  }}/>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default Navbar;