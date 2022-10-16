import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Footer from './components/Footer.js';
import Header from './components/Header.js';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default App;
