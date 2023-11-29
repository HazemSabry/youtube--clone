import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { Sidebar, Navbar } from ".";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Stack
        sx={{
          flexDirection: { sx: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            maxWidth: "18%",
          }}
        >
          <Sidebar />
        </Box>
        <Outlet />
      </Stack>
    </>
  );
};

export default Layout;
