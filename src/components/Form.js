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
const [formError, setFormError] = useState({
  errorFirstName: false,
  errorLastName: false,
  errorEmailAddress: false,
  errorPassword: false
})


const onChangeForm = (e) => {
  setForm({...form, [e.target.name]: e.target.value})
}

const handleSubmit = (event) => {
  event.preventDefault();
  const findBlankFields = {};
  if (form.firstName === '' || form.firstName === null) {
    findBlankFields.firstName = true;
    formError.errorFirstName = true;
    setSubmitSuccess(false)
  } 
  if (form.lastName === '' || form.lastName === null) {
    findBlankFields.lastName ="Please fill your last name"
    formError.errorLastName = true;
    setSubmitSuccess(false)
  }  
 if (form.emailAddress === '' || form.emailAddress === null) {
   findBlankFields.emailAddress ="Please fill your email address"
   formError.errorEmailAddress = true;
   setSubmitSuccess(false)
  }  
 if (form.password === '' || form.password === null) {
   findBlankFields.password ="Please fill your password"
   formError.errorPassword = true;
   setSubmitSuccess(false)
  }
    setBlankField(findBlankFields)
    debugger
  
    if(Object.keys(findBlankFields).length === 0) {
      setSubmitSuccess(submitSuccess)
      alert("Form Submitted successfully")
      setForm({  
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
      })
      console.log(form)
    } else {  
      setFormError(formError)    
      alert("Form Needs Correction")
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
          id="outlined-required"      
          label="First Name"
          margin="normal"
          name="firstName"
          value={form.firstName}
          onChange={onChangeForm}
          error={formError.errorFirstName}
          helperText={formError.errorFirstName ? "First name can not be empty." : null}
        />
        <TextField
          className='formField'
          id="outlined-required"
          label="Last Name"
          margin="normal"
          name='lastName'
          value={form.lastName}
          onChange={onChangeForm}
          error={formError.errorLastName}
          helperText={formError.errorLastName ? "Last name can not be empty." : null}

          />
        <TextField
          className='formField'
          id="outlined-required"
          label="Email Address"
          margin="normal"
          name='emailAddress'
          value={form.emailAddress}
          onChange={onChangeForm}
          error={formError.errorEmailAddress}
          helperText={formError.errorEmailAddress ? "Please enter a valid email." : null}
        />
        <TextField
          className='formField'
          id="outlined-required"
          label="Password"
          margin="normal"
          name="password"
          value={form.password}
          onChange={onChangeForm}
          error={formError.errorPassword}
          helperText={formError.errorPassword ? "Password can not be empty" : null}
        />
        </div>
        <button className='formButton' type='submit' variant="contained">CLAIM YOUR FREE TRIAL</button>
        <p>By clicking the button, you are agreeing to our Terms and Services</p>
      </form>
    </div>
  );
}
