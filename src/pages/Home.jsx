import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        backgroundColor: "#0F0F0F",
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
    </Stack>
  );
};

export default Home;
