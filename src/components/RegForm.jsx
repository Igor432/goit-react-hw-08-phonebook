import style from './phonebook.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Register } from '../redux/auth/operations';
import { useAuth } from '../redux/auth/hooks';
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

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '' || name === '') {
      Notiflix.Notify.failure('Please, fill all the fields');
    } else {
   
    dispatch(Register({name: name, email:email, password:password}));
  
    };
    setName('');
    setEmail('');
    setPassword('');
  }


  
  
  return (
    <form className={style.regForm} onSubmit={onSubmit}>
      <AssignmentIndIcon
        fontSize="large"
        color="primary"
        className={style.Icon}
      />
      <h3>Please, enter your credentials:</h3>
      <Box
        onSubmit={onSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        validate='true'
        autoComplete="off"
        className={style.form_box}
      >
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
        />
        <Button type="submit" variant="contained" onClick={onSubmit}>
          Register
        </Button>
      </Box>
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
