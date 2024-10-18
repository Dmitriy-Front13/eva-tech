import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Footer from '../footer/Footer';
import Header from '../header/Header';
import MainPage from '../../pages/MainPage';

import '../../assets/styles/style.scss';

const DeliveryPage = lazy(() => import('../../pages/Delivery'));
const WarrantyPage = lazy(() => import('../../pages/Warranty'));
const AboutUsPage = lazy(() => import('../../pages/AboutUs'));
const AboutProductPage = lazy(() => import('../../pages/AboutProduct'));
const OrderPage = lazy(() => import('../../pages/OrderPage'));
const CheckoutPage = lazy(() => import('../../pages/Checkout'));
const CongratulationsPage = lazy(() => import('../../pages/Congratulations'));

function App() {
  return (
    <Router>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/about-product' element={<AboutProductPage />}/>
          <Route path='/warranty' element={<WarrantyPage />}/>
          <Route path='/delivery' element={<DeliveryPage />}/>
          <Route path='/about-us' element={<AboutUsPage />}/>
          <Route path='/order' element={<OrderPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/congratulations' element={<CongratulationsPage/>}/>
        </Routes>
      </Suspense>
      <Footer/>
    </Router>
  );
}

export default App;

