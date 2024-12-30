// SettingsModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SettingsModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Settings</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/* Add settings options here */}
      <p>Settings content goes here.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default SettingsModal;
