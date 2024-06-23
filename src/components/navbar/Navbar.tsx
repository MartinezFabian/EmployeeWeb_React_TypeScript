import { useState } from 'react';
import { AppBar, Button, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import BasicModal from '../BasicModal';
import FavoritesTable from './FavoritesTable';

const Navbar = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // MUI Responsive
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            margin: isSmallScreen ? '0' : '0 60px',

            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6" component="h1">
            EmployeeWeb
          </Typography>

          <Button
            size="small"
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
