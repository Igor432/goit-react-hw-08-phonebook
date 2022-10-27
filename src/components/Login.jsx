import style from './phonebook.module.css';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/hooks';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { LogIn } from 'redux/auth/operations';
import KeyIcon from '@mui/icons-material/Key';
import Notiflix from 'notiflix';

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
 

    if (email === '' || password === '') {
      Notiflix.Notify.failure('Please, fill all the fields');
    } else {
      dispatch(LogIn({email: email, password: password}));
      setEmail('');
      setPassword('');
    }
  };

  const { checkLoggedIn } = useAuth();

  if (checkLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <form className={style.regForm} onSubmit={onSubmit}>
      <KeyIcon color="primary" fontSize="large" className={style.Icon} />
      <h3>Please, enter your credentials:</h3>
      <TextField
        type="email"
        id="outlined-email"
        label="Email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required
        value={email}
        name="email"
        onChange={handleChange}
      />
      <TextField
        type="password"
        id="password"
        label="Password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        required
        value={password}
        name="password"
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" onClick={onSubmit}>
        Login
      </Button>
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
