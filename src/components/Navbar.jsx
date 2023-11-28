import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={1}
      sx={{
        position: "sticky",
        background: "#0F0F0F",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <IconButton
          aria-label="menu"
          disableRipple
          size="large"
          sx={{ color: "white", padding: 0 }}
        >
          <MenuIcon fontSize="inherit" />
        </IconButton>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={20} />
        </Link>
      </Box>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
