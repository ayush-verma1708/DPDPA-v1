// src/components/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const Header = ({ title, user, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#f5f5f5" }}>
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography variant="body1" className="text-indigo-950">
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: '#111' }}>
            {user ? `Hello, ${user.username}` : "Hello Guest"}
          </Typography>
          <Button color="inherit" onClick={handleLogout} sx={{ color: '#111' }}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
// import { Box } from "@mui/material";

// const Header = ({ title,user, handleLogout }) => {
//   const navigate = useNavigate();

//   return (
//     <AppBar position="static" sx={{ backgroundColor: "#f5f5f5" }}>
//       <Box display="flex" justifyContent="space-between" p={2}>
//         <Typography variant="body1" className="text-indigo-950">
//           {title}
//         </Typography>
//         <Typography variant="body1">
//           {user ? `Hello, ${user.name}` : "Not logged in"}
//         </Typography>
//         <Typography variant="body1">
//           <Button className="text-red-950" onClick={handleLogout}>
//             Logout
//           </Button>
//         </Typography>
//       </Box>
//     </AppBar>
//   );
// };

// export default Header;
