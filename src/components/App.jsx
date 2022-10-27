import style from './phonebook.module.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { Home } from './Home';
import  RegForm  from './RegForm';
import  Login  from './Login';
import { useEffect } from 'react';
import { Phonebook } from './PhonebookPage';
import { useDispatch } from 'react-redux';
import { useAuth } from 'redux/auth/hooks';
import { refreshUser } from 'redux/auth/operations';

export function App() {
const dispatch = useDispatch()

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div className={style.main}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegForm />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contacts" element={<Phonebook />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
