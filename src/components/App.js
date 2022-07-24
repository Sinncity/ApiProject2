import { ThemeProvider } from "@mui/material/styles";
import theme from "./Ui/Theme";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "../components/Ui/Header";
import LazyLoad from "./Ui/LazyLoad";
import React from "react";

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={() => {
              <div>
                💯🤫🏠🎨🐚//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ki8jun
              </div>;
            }}
          />

          <Route
            exact
            path="/Gallery"
            element={() => <div>🏠🎨🐚🐚🐚🎨/</div>}
          />
          <Route
            exact
            path="/3DGallery"
            component={() => {
              <div>3D Gallery</div>;
            }}
          />
          <Route exact path="/AboutUs" component={() => <div>About US</div>} />
          <Route
            exact
            path="/ContactUs"
            component={() => {
              <div>Contact Us</div>;
            }}
          />
        </Routes>
      </BrowserRouter>
      <LazyLoad />
    </ThemeProvider>
  );
}
export default App;
