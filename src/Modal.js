import React, { useState } from 'react';
import { HStack } from './Flex';
import './Modal.css';

const Modal = ({ title, isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <HStack vCentered styleProps={{ justifyContent: 'space-between' }} className='mb-4'>
              <h2 className='mt-0'>{title}</h2>
              <button className='close-btn' onClick={handleClose}>
                &times;
              </button>
            </HStack>
            {children}
          </div>
        </div>
      )
      }
    </>
  );
};

export default Modal;