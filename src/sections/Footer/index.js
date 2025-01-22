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
                            <a href='#'>About Us</a>
                            <a href='#'>Blog</a>
                            <a href='#'>Careers</a>
                            <a href='#'>Jobs</a>
                            <a href='#'>In Press</a>
                            <a href='#'>Gallery</a>
                        </div>
                    </div>
                    <div className='support'>
                        <h5>Support</h5>
                        <div className='items'>
                            <a href='#'>Support</a>
                            <a href='#'>Contact Us</a>
                            <a href='#'>Online Chat</a>
                            <a href='#'>Whatsapp</a>
                            <a href='#'>Telegram</a>
                            <a href='#'>Ticketing</a>
                            <a href='#'>Call Center</a>
                        </div>
                    </div>
                    <div className='FAQ'>
                        <h5>FAQ</h5>
                        <div className='items'>
                            <a href='#'>Account</a>
                            <a href='#'>Booking</a>
                            <a href='#'>Payments</a>
                            <a href='#'>Returns</a>
                            <a href='#'>Privacy Policy</a>
                            <a href='#'>Terms & Condition</a>
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