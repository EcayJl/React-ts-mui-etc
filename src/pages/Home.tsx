import { Avatar, Typography } from "@mui/material";
import React from "react";
import VerticalTabs from "../components/common/Tabs";
import Box from "@mui/material/Box";
import LinearColor from "../components/common/Loader";

const HomePage: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Box mb={10} mt={10}>
      <Avatar alt="Esaul" src="https://c.tenor.com/yE1umHkLcIMAAAAC/ankha-dance.gif" />
        <Typography variant="h2">
          Hi, my name is Esaul and in this App I will try to show you how I
          handle the stack.
          <br />
          What are the main technologies I used? :
        </Typography>
      </Box>
      <Typography mt={2}>the site is under development. functionality is being added as we go along &#128406;</Typography>
        <Box style={{opacity: "0.2", pointerEvents: "none"}} mt={4}>
          <LinearColor/>
          <VerticalTabs></VerticalTabs>
        </Box>
    </React.Fragment>
  );
};

export default HomePage;
