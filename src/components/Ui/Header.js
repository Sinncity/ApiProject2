import React from "react";
import "../Ui/Header.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button1 from "./Button1";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 12 : -1,
  });
}

export default function Header(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ElevationScroll>
      <AppBar position="fixed" color="secondary">
        <Toolbar disableGutters>
          <Button component={Link} to="/">
            <Typography variant="h4">Project Mui 🔥</Typography>
          </Button>
          <Tabs
            className="tabContainer"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab className="tab" label="Home🏠" component={Link} to="/" />
            <Tab
              className="tab"
              label="Gallery🖼️"
              component={Link}
              to="/Gallery"
            />
            <Tab
              className="tab"
              label="3DGallery🎨"
              component={Link}
              to="/3DGallery"
            />
            <Tab
              className="tab"
              label="About📓"
              component={Link}
              to="/AboutUs"
            />
            <Tab
              className="tab"
              label="Contact📲"
              component={Link}
              to="/ContactUs"
            />
            <Button1 className="button1" component={Link} />
            <Button1 className="button1" label="Extra2🥳" component={Link} />
          </Tabs>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
