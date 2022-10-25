import style from './phonebook.module.css';
import { useAuth } from 'components/redux/auth/hooks';

export const Home = () => {
  const { checkLoggedIn, user } = useAuth();
  console.log(user);

  return (
    <div className={style.home_page}>
      {checkLoggedIn ? (
        <h1>Welcome to your Contact Book, {user.name}!</h1>
      ) : (
        <h1>Welcome to your Contact Book!</h1>
      )}
    </div>
  );
};
