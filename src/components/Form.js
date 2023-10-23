import { TextField } from '@mui/material';
import './form.css';

export default function Form() {
  return (
    <div className="formSection">
      <p className="formBanner"> <strong>Try it free 7 days</strong> then $20/month thereafter</p>
      <form   
      className='formContainer'    
        noValidate
        autoComplete="off">
        <div className='formFieldsWrapper'>
        <TextField
          className='formField'
          id="outlined-required"
          label="First Name"
          margin="normal"
        />
        <TextField
          className='formField'
          id="outlined-required"
          label="Last Name"
          margin="normal"
          />
        <TextField
          className='formField'
          id="outlined-required"
          label="Email Address"
          margin="normal"
        />
        <TextField
          className='formField'
          id="outlined-required"
          label="Password"
          margin="normal"
        />
        </div>
        <button className='formButton' variant="contained">CLAIM YOUR FREE TRIAL</button>
        <p>By clicking the button, you are agreeing to our Terms and Services</p>
      </form>
    </div>
  );
}
