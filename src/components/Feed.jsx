import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Typography color="#fff" className="copyright" variant="body2">
          &copy;Copyright 2023 to Hazem Sabry
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
