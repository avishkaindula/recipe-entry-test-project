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
          <Typography>
            <LunchDiningOutlinedIcon />
          </Typography>
          <Typography variant="h6" sx={{ ml: "2rem" }}>
            My Recipes
          </Typography>
          <Button color="info" variant="outlined" sx={{ ml: "auto" }}>
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
