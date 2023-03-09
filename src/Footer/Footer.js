import React from 'react';
import './Footer.scss';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';


function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <p>hello@workoholics.es</p>
        <p>+34 944 059 957</p>
      </div>
      <div className="footer-column">
        <h2>We love what we do.</h2>
        <h2>We are Worköholics</h2>

        
        <form className="subscribe-form">
          <label htmlFor="email">E-mail  </label>
          <input type="email" id="email" name="email" placeholder="" required />
          <FormGroup>
      <FormControlLabel control={<Checkbox Checked sx={{ color: grey[50] }} />} label="I have read and accepted the Terms and Conditions." />
    </FormGroup>
    <Button variant="text" label="Submit" sx={{ color: grey[50] }} endIcon={< SubdirectoryArrowRightIcon sx={{ color: grey[50] }}/>}>Submit</Button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
