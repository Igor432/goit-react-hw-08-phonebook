import style from '../RegForm/RegForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogIn, Register } from '../../redux/auth/operations';
import { useAuth } from '../../redux/auth/hooks';
import { Navigate } from 'react-router-dom';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Notiflix from 'notiflix';

function RegForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { checkLoggedIn } = useAuth();

  if (checkLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);

        break;
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

  const onSubmit = async e => {
    e.preventDefault();
    if (email === '' || password === '' || name === '') {
      Notiflix.Notify.failure('Please, fill all the fields');
    } else {
      await dispatch(
        Register({ name: name, email: email, password: password })
      )

      dispatch(LogIn({ email: email, password: password }));
    }

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={style.regForm} onSubmit={onSubmit}>
      <AssignmentIndIcon
        fontSize="large"
        color="primary"
        className={style.Icon}
      />
      <h3>Please, enter your credentials:</h3>

      <TextField
        id="outlined-name"
        name="name"
        label="Name"
        pattern="[a-z]{4,8}"
        required
        value={name}
        onChange={handleChange}
      />
      <TextField
        id="outlined-email"
        name="email"
        label="Email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required
        value={email}
        onChange={handleChange}
        error={email.length > 0 && !email.includes('@')}
        helperText={
          email.length > 0 && !email.includes('@')
            ? 'It must have @ symbol!'
            : ''
        }
      />
      <TextField
        type="password"
        id="outlined-password"
        name="password"
        label="Password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        required
        value={password}
        onChange={handleChange}
        error={password.length > 0 && password.length < 6}
        helperText={
          password.length > 0 && password.length < 6
            ? 'It must be at least 6 symbols!'
            : ' '
        }
      />
      <Button type="submit" variant="contained" onClick={onSubmit}>
        Register
      </Button>
    </form>
  );
}

export default RegForm;

/*

export const RegForm = () => {
  return (

  
    <form className={style.regForm}>
        <h3>Please, enter your credentials:</h3>
        
      <label for="name" >
        Name:
        <input type="text" name="name" />
      </label>
      <label for="email">
        Email:
        <input type="email" name="email" />
      </label>
      <label for="password">
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
    
  );
};

*/
