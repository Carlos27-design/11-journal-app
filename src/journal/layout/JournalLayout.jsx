import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../components';

const drawerWidht = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box
      sx={{ display: 'flex' }}
      className='animate__animated animate__fadeIn animate__faster'
    >
      {/* Navbar drawerWidht */}

      <NavBar drawerWidht={drawerWidht} />
      {/* Sidebar drawerWidht */}

      <SideBar drawerWidth={drawerWidht} />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar drawerWidht */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
