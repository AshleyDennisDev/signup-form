import { TextField } from '@mui/material';
import './form.css';
import { useState } from 'react';

export default function Form() {
const [submitSuccess, setSubmitSuccess] = useState(false)
const [blankField, setBlankField] = useState({})
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
  debugger
  event.preventDefault();
  const findBlankFields = {};
  if (form.firstName === '' || form.firstName === null) {
    findBlankFields.firstName = true;
    setSubmitSuccess(submitSuccess)
    debugger
  } 
  if (form.lastName === '' || form.lastName === null) {
    findBlankFields.lastName ="Please fill your last name"
    setSubmitSuccess(false)
  }  
 if (form.emailAddress === '' || form.emailAddress === null) {
   findBlankFields.emailAddress ="Please fill your email address"
   setSubmitSuccess(false)
  }  
 if (form.password === '' || form.password === null) {
   findBlankFields.password ="Please fill your password"
   setSubmitSuccess(false)
  }
    setBlankField(findBlankFields)
    debugger
  
    if(Object.keys(findBlankFields).length === 0) {
      debugger
      setSubmitSuccess(submitSuccess)
      alert("Form Submitted successfully")
      setForm({  
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
      })
      console.log(form)
    }
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
          id={ submitSuccess ? "outlined-error":  "outlined-required" }
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
