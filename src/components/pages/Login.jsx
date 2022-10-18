import style from './phonebook.module.css';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'components/redux/auth/hooks';

export const Login = () => {


    const {checkLoggedIn} = useAuth()
    console.log(checkLoggedIn)
    
    if (checkLoggedIn) {
      return <Navigate to='/contacts'/>
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
