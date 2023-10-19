import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

export default function Form() {
  return (
    <div className="App">
      <h1>Sign Form</h1>
      <form       
        noValidate
        autoComplete="off">
        <div>
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

      </form>
    </div>
  );
}
