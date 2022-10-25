import style from './pages/phonebook.module.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import { Home } from './pages/Home';
import  RegForm  from './pages/RegForm';
import  Login  from './pages/Login';
import { useEffect } from 'react';
import { Phonebook } from './pages/PhonebookPage';
import { useDispatch } from 'react-redux';
import { useAuth } from 'components/redux/auth/hooks';
import { refreshUser } from 'components/redux/auth/operations';

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
