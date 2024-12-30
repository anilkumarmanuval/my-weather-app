// AddCityModal.js
import React, { useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { WeatherContext } from './WeatherContext';

const AddCityModal = ({ show, handleClose }) => {
  const { preferredCities, setPreferredCities } = useContext(WeatherContext);
  const [newCity, setNewCity] = useState('');

  const handleAddCity = () => {
    if (newCity && !preferredCities.includes(newCity)) {
      setPreferredCities([...preferredCities, newCity]);
    }
    setNewCity('');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add City</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          placeholder="Enter city name"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddCity}>
          Add City
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCityModal;
