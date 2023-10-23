import { TextField } from '@mui/material';
import './form.css';
import { useState } from 'react';

export default function Form() {
const [form, setForm] = useState({
  firstName: '',
  lastName: '',
  emailAddress: '',
  password: ''
})

const onChangeForm = (e) => {
  setForm({...form, [e.target.name]: e.target.value})
}

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(form)
  setForm({  
  firstName: '',
  lastName: '',
  emailAddress: '',
  password: ''
  })
}


  return (
    <div className="formSection">
      <p className="formBanner"> <strong>Try it free 7 days</strong> then $20/month thereafter</p>
      <form   
      className='formContainer'    
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        >
        <div className='formFieldsWrapper'>
        <TextField
          className='formField'
          id="outlined-required"
          label="First Name"
          margin="normal"
          name="firstName"
          value={form.firstName}
          onChange={onChangeForm}
        />
        <TextField
          className='formField'
          id="outlined-required"
          label="Last Name"
          margin="normal"
          name='lastName'
          value={form.lastName}
          onChange={onChangeForm}
          />
        <TextField
          className='formField'
          id="outlined-required"
          label="Email Address"
          margin="normal"
          name='emailAddress'
          value={form.emailAddress}
          onChange={onChangeForm}
        />
        <TextField
          className='formField'
          id="outlined-required"
          label="Password"
          margin="normal"
          name="password"
          value={form.password}
          onChange={onChangeForm}
        />
        </div>
        <button className='formButton' type='submit' variant="contained">CLAIM YOUR FREE TRIAL</button>
        <p>By clicking the button, you are agreeing to our Terms and Services</p>
      </form>
    </div>
  );
}
