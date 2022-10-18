import style from './pages/phonebook.module.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import { Home } from './pages/Home';

export function App() {
  return (
    <div className={style.main}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
