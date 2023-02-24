import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Col, Row } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col className='mt-5'>
            <Routes>
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/cart/:id?' element={<CartScreen />} />
              <Route path='/' element={<HomeScreen />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
