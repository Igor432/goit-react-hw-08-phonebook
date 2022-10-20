import style from './phonebook.module.css';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'components/redux/auth/hooks';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { LogIn } from 'components/redux/auth/operations';
import KeyIcon from '@mui/icons-material/Key';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        console.log(`Sorry, enter info}.`);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const loginUser = {
      email: email,
      password: password,
    };
    dispatch(LogIn(loginUser));
    setEmail('');
    setPassword('');
  };

  const { checkLoggedIn } = useAuth();

  if (checkLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <form className={style.regForm}>
      <KeyIcon color='primary' fontSize='large' className={style.Icon}/>
      <h3>Please, enter your credentials:</h3>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        className={style.form_box}
      >
        <TextField
          id="outlined-email"
          label="Email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <TextField
          id="outlined-email"
          label="Password"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" onClick={onSubmit}>
          Login
        </Button>
      </Box>
    </form>
  );
}

export default Login;

/*
export const Login = () => {
  const { checkLoggedIn } = useAuth();
  console.log(checkLoggedIn);

  if (checkLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <form className={style.regForm}>
      <h3>Please, enter your credentials:</h3>

      <label for="email">
        Email:
        <input type="email" name="email" />
      </label>
      <label for="password">
        Password:
        <input type="password" name="password" />
      </label>

      <button type="login">Log-In</button>
    </form>
  );
};

*/
