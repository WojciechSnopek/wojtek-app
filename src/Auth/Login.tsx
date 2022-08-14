import {Button, TextField} from '@mui/material';
import {LoginWrapper} from './Login.styled'


export function Login() {
    return (
      <LoginWrapper>
            <TextField label="Login" id="Login" color='info' />
            <TextField label="Password" id="Password" color='info' />
            <Button variant="contained">Log in</Button>
       </LoginWrapper>
    );
  }
  