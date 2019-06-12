import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MainPage from './components/pages/MainPage';
import './assets/styles/main.scss';

function App() {
  return (
    <div className="page">
      <Header />
      <Nav />
      <main className="page__content">
        <MainPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
