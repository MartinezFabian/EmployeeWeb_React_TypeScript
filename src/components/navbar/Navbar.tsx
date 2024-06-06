import React, { useState } from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import BasicModal from '../BasicModal';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoritesTable from './FavoritesTable';

interface NavbarProps {
  // define your props here
}

const Navbar: React.FC<NavbarProps> = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            margin: '0 40px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6" component="h1">
            EmployeeWeb
          </Typography>

          <Button
            color="secondary"
            onClick={handleOpenModal}
            variant="contained"
            startIcon={<BookmarkIcon />}
          >
            destacados
          </Button>
        </Toolbar>
      </AppBar>

      <BasicModal openModal={openModal} handleCloseModal={handleCloseModal}>
        <FavoritesTable />
      </BasicModal>
    </>
  );
};

export default Navbar;
