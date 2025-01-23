import './index.scss'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { grey } from '@mui/material/colors';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PeopleIcon from '@mui/icons-material/People';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Btn from '../Button';

// use mui icons
        
// add more comments in your code!

function TourSearch() {
    return (
        <div className='tourSearch'>
            <div className='date item'>
                <div className='left'>
                    <CalendarMonthOutlinedIcon sx={{ color: grey[50] }}/>
                    <label>Date</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker sx={{display: "none"}} label="Basic date picker" open={false}/>
                    </LocalizationProvider>
                </div>
                <ExpandMoreOutlinedIcon sx={{ color: grey[50] }}/>
            </div>
            <div className='budget item'>
                <div className='left'>
                    <AccountBalanceWalletOutlinedIcon sx={{ color: grey[50] }}/>
                    <label>Budget</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker sx={{display: "none"}} label="Basic date picker" open={false}/>
                    </LocalizationProvider>
                </div>
                <ExpandMoreOutlinedIcon sx={{ color: grey[50] }}/>
            </div>
            <div className='guests item'>
                <div className='left'>
                    <PeopleIcon sx={{ color: grey[50] }}/>
                    <label>Guests</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker sx={{display: "none"}} label="Basic date picker" open={false}/>
                    </LocalizationProvider>
                </div>
                <ExpandMoreOutlinedIcon sx={{ color: grey[50] }}/>
            </div>
            <Btn className="tourBtn" text="Search" size="btn-big" colour="white" textCol="black"/>
        </div>
    );
}

export default TourSearch;