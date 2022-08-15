import {Button, TextField} from '@mui/material';
import {LoginWrapper} from './Login.styled'


export function Login() {
    return (
      <LoginWrapper>
            <TextField label="Login" id="Login" color='success' />
            <TextField label="Password" id="Password" type={'password'} color='success' />
            <Button variant="contained" size='large' color='success'>Log in</Button>
       </LoginWrapper>
    );
  }
  