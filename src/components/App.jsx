import style from './pages/phonebook.module.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import { Home } from './pages/Home';
import  RegForm  from './pages/RegForm';
import  Login  from './pages/Login';
import { Phonebook } from './pages/PhonebookPage';

export function App() {
  return (
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
