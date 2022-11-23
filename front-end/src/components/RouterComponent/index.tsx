import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import { Orders } from '../../pages/Orders';
import Login from '../../pages/Login';
import { Header } from '../Header';

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default function RouterComponent() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Orders />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}
