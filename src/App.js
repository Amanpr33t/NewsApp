import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Modal from './components/Modal';
import { useNavigate, Routes, Route } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  }, [navigate])
  const [showModal, setShowModal] = useState(false);

  return (
    <div onClick={() => showModal ? setShowModal(false) : null}>
      <Navbar />
      <Routes>
        <Route path='/*' element={<Body modalSetter={() => setShowModal(true)} showModal={showModal} />} />
      </Routes>
      <Modal showModal={showModal} closeModal={() => setShowModal(false)} />
    </div>
  );
}

export default App;
