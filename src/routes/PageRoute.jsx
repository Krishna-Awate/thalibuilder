import { Route, Routes } from 'react-router-dom';
import routes from '../routes/routes.json';
import Cart from '../components/Cart/Cart';
import Home from '../pages/Home';
import Payment from '../components/Payment/Payment';

const PageRoute = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.CART} element={<Cart />} />
        <Route
          path={`${routes.CART}/:${routes.PAYMENT}`}
          element={<Payment />}
        />
      </Routes>
    </>
  );
};

export default PageRoute;
