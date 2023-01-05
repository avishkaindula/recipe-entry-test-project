import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#263238" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white"}}>
            <Typography>
              <LunchDiningOutlinedIcon />
            </Typography>
          </NavLink>
          <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
            <Typography variant="h6" sx={{ ml: "2rem" }}>
              My Recipes
            </Typography>
          </NavLink>
          <Button
            onClick={() => window.location.reload(false)}
            color="info"
            variant="outlined"
            sx={{ ml: "auto" }}
            style={{ color: "white" }}
          >
            Refresh
          </Button>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/" label="All Recipes" />
            <Tab LinkComponent={NavLink} to="/add" label="Add Recipe" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
