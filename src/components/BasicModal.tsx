import React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '1200px',
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

interface ModalProps {
  openModal: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
}

const BasicModal: React.FC<ModalProps> = ({ openModal, handleCloseModal, children }) => {
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </>
  );
};

export default BasicModal;
