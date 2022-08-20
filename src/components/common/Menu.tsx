import React from "react";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Link } from "react-router-dom";

const routes: Record<string, string> = {
    ts: 'ts',
    home: '/',
    react: 'react'
}

const MainMenuComponent: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" mt={3}>menu</Typography>
      <WidgetsIcon />
      <Box position={"fixed"} sx={{ width: "100%" }}>
        <ul>
          <li><Link to={routes.home}>Home</Link></li>
          <li><Link to={routes.ts}>TypeScript</Link></li>
          <li>React RTK&etc</li>
        </ul>
      </Box>
      <Typography variant="h5" mt={6} mb={1}><a href="https://github.com/EcayJl?tab=repositories" target="_blanc">let`s go to my repo</a></Typography>

    </React.Fragment>
  );
};

export default MainMenuComponent;
