import "./index.scss";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { grey } from "@mui/material/colors";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PeopleIcon from "@mui/icons-material/People";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Modal,
  Slider,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";

function TourSearch() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedAmount, setSelectedAmount] = useState();
  const [guestAmount, setGuestAmount] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDateOpen((dateOpen) => !dateOpen);
  };

  function handleDialogChange(value) {
    setSelectedAmount(value.target.value);
  }

  function handleGuestsChange(value) {
    setGuestAmount(value.target.value);
  }

  function valuetext(value) {
    return `$${value}`;
  }

  return (
    <div className="tourSearch">
      <div className="date item">
        <div
          className="left"
          onClick={() => setDateOpen((dateOpen) => !dateOpen)}
        >
          <CalendarMonthOutlinedIcon sx={{ color: grey[50] }} />
          <label>
            {selectedDate ? selectedDate.format("DD-MM-YYYY") : "Date"}
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              sx={{ display: "none" }}
              label="Basic date picker"
              open={dateOpen}
              onChange={handleDateChange}
            />
          </LocalizationProvider>
        </div>
        <ExpandMoreOutlinedIcon sx={{ color: grey[50] }} />
      </div>

      <div className="budget item">
        <div
          className="left"
          onClick={() => setDialogOpen((dialogOpen) => !dialogOpen)}
        >
          <AccountBalanceWalletOutlinedIcon sx={{ color: grey[50] }} />
          <label>{selectedAmount ? `$${selectedAmount}` : "Budget"}</label>
          <Dialog
            open={dialogOpen}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">
              Budget Range: $0 - $800
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
                <Box sx={{ width: 300, height: 50 }} open={dialogOpen}>
                  <Slider
                    aria-label="dollar"
                    shiftStep={30}
                    step={50}
                    getAriaValueText={valuetext}
                    marks
                    min={0}
                    max={800}
                    onChange={handleDialogChange}
                  />
                </Box>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
        <ExpandMoreOutlinedIcon sx={{ color: grey[50] }} />
      </div>

      <div className="guests item">
        <div
          className="left"
          onClick={() => setGuestOpen((guestOpen) => !guestOpen)}
        >
          <PeopleIcon sx={{ color: grey[50] }} />
          <label>{guestAmount ? guestAmount : "Guests"}</label>
          <ExpandMoreOutlinedIcon sx={{ color: grey[50] }} />
          <Dialog
            open={guestOpen}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">Number Of Guests</DialogTitle>
            <DialogContent>
              <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
                <TextField
                  select
                  onChange={handleGuestsChange}
                  variant="outlined"
                  sx={{ ml: 2, background: "white", borderRadius: 1 }}
                  defaultValue="No Guests"
                >
                  <MenuItem value="No Guests">No Guest</MenuItem>
                  <MenuItem value="1 Guest">1 Guest</MenuItem>
                  <MenuItem value="2 - 5 Guests">2 - 5 Guests</MenuItem>
                  <MenuItem value="5 - 10 Guests">5 - 10 Guests</MenuItem>
                  <MenuItem value="Guests > 10">Guests &gt; 10</MenuItem>
                </TextField>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <button onClick={() => setModalOpen((modalOpen) => !modalOpen)} style={{backgroundColor: `white`, color: `black`, fontFamily: "Poppins, serif", fontWeight: 400, textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column"}}  className="btn-big" type="submit">submit</button>
      <Modal open={modalOpen} onClick={() => setModalOpen((modalOpen) => !modalOpen)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Your Search Is Sent to Review
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            We'll get back to you as soon as possible.
            <table style={{ border: "1px solid black", marginTop: 30 }}>
              <caption style={{ fontSize: 20, color: "black" }}>
                Searched Details
              </caption>
              <tr style={{ border: "1px solid black" }}>
                <td style={{ color: "black" }}>Searched Date:</td>
                <td>{selectedDate ? selectedDate.format("DD-MM-YYYY") : "Date Not Selected"}</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td style={{ color: "black" }}>Budget:</td>
                <td>{selectedAmount ? selectedAmount : "Date Not Selected"}</td>
              </tr>
              <tr>
                <td style={{ color: "black" }}>No. of Guest:</td>
                <td>{guestAmount ? guestAmount : "Date Not Selected"}</td>
              </tr>
            </table>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default TourSearch;
