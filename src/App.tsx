import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MeasuringUI from "./components/measuringUI/Measuring";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme as mainTheme } from "./theme-option/darkTheme";
import HomePage from "./pages/Home";
import Layout from "./Layout/Layout";
import TypeScriptPage from "./pages/TypeScript/TypeScriptPage";
import Box from "@mui/material/Box";

const ReactAppMainContainer: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Box className="app-react-component" mt={10}>
            <Routes>
              <Route
                path="/components-testing"
                caseSensitive={false}
                element={<MeasuringUI />}
              />
              <Route path="/" caseSensitive={false} element={<HomePage />} />
              <Route path="/ts" caseSensitive={false} element={<TypeScriptPage/>} />
            </Routes>
          </Box>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default ReactAppMainContainer;
