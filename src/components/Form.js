import { Button, TextField } from '@mui/material';
import './form.css';

export default function Form() {
  return (
    <div className="formContainer">
      <p>Try it free 7 days then $20/month thereafter</p>
      <form   
      className='formField'    
        noValidate
        autoComplete="off">
        <div className='formFields'>
        <TextField
          id="outlined-required"
          label="First Name"
        />
        <TextField
          id="outlined-required"
          label="Last Name"
          />
        <TextField
          id="outlined-required"
          label="Email Address"
        />
        <TextField
          id="outlined-required"
          label="Password"
        />
        </div>
        <Button variant="contained">CLAIM YOUR FREE TRIAL</Button>
        <p>By clicking the button, you are agreeing to our Terms and Services</p>
      </form>
    </div>
  );
}
