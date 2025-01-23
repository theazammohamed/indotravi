import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import './index.scss'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Btn from '../../components/Button';

function Footer () {
    return(
        <footer>
            <div className='top marginWrap'>
                <div className='left'>
                    <div className='about'>
                        <h5>About</h5>
                        <div className='items'>
                            <a href='#bestLocation'>About Us</a>
                            <a href='#bestLocation'>Blog</a>
                            <a href='#bestLocation'>Careers</a>
                            <a href='#bestLocation'>Jobs</a>
                            <a href='#bestLocation'>In Press</a>
                            <a href='#bestLocation'>Gallery</a>
                        </div>
                    </div>
                    <div className='support'>
                        <h5>Support</h5>
                        <div className='items'>
                            <a href='#bestLocation'>Support</a>
                            <a href='#bestLocation'>Contact Us</a>
                            <a href='#bestLocation'>Online Chat</a>
                            <a href='#bestLocation'>Whatsapp</a>
                            <a href='#bestLocation'>Telegram</a>
                            <a href='#bestLocation'>Ticketing</a>
                            <a href='#bestLocation'>Call Center</a>
                        </div>
                    </div>
                    <div className='FAQ'>
                        <h5>FAQ</h5>
                        <div className='items'>
                            <a href='#bestLocation'>Account</a>
                            <a href='#bestLocation'>Booking</a>
                            <a href='#bestLocation'>Payments</a>
                            <a href='#bestLocation'>Returns</a>
                            <a href='#bestLocation'>Privacy Policy</a>
                            <a href='#bestLocation'>Terms & Condition</a>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='newsletter'>
                        <div className='header'>
                            <h4>Newsletter</h4>
                            <span className='description'>Don't miss out on the exciting world of travel - subscribe now and embark on a journey of discovery with us.</span>
                        </div>
                        <div className='getEmail'>
                            <MailOutlineOutlinedIcon sx={{ fontSize: 25, color: "white", padding: "5px 10px" }}/>
                            <input type='email' placeholder='Enter Your Email'/>
                            <Btn text="Submit" size="btn-small" colour="grey" textCol="white"/>
                        </div>
                    </div>
                    <div className='socialIcons'>
                        <Instagram sx={{ fontSize: 30, color: "white",  backgroundColor: "var(--grey)", padding: "5px", borderRadius: "100%" }}/>
                        <Facebook sx={{ fontSize: 30, color: "white", backgroundColor: "var(--grey)", padding: "5px", borderRadius: "100%"  }}/>
                        <YouTube sx={{ fontSize: 30, color: "white", backgroundColor: "var(--grey)", padding: "5px", borderRadius: "100%"  }}/>
                    </div>
                </div>
            </div>
            <div className='bottom marginWrap'>
                &copy;2023 Indotravi, All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer;