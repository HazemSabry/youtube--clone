import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Stack } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Stack direction="row">
      <input
        className="search-bar"
        type="text"
        placeholder="Search"
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: 0 }}>
        <Search
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#222222",
            p: "8px",
            width: "3rem",
            "border-top-right-radius": "20px",
            "border-bottom-right-radius": "20px",
          }}
        />
      </IconButton>
    </Stack>
  );
};

export default SearchBar;
