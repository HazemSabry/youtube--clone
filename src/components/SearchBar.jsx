import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Stack } from "@mui/material";
import { Search } from "@mui/icons-material";
import MicIcon from "@mui/icons-material/Mic";

const SearchBar = () => {
  const [focus, setFocus] = useState(false);

  return (
    <Stack direction="row">
      {focus && (
        <IconButton type="submit" sx={{ p: 0 }}>
          <Search
            sx={{
              color: "#FFFFFF",
              position: "absolute",
              right: "-2.5rem",
            }}
          />
        </IconButton>
      )}
      <input
        className="search-bar"
        type="text"
        placeholder="Search"
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: 0 }}>
        <Search
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#222222",
            border: "1px solid #3b3b3b",
            borderLeft: "none",
            p: "8px",
            width: "3rem",
            "border-top-right-radius": "20px",
            "border-bottom-right-radius": "20px",
          }}
        />
      </IconButton>
      <IconButton type="submit" sx={{ p: 0 }}>
        <MicIcon
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#222222",
            borderRadius: "50%",
            p: "8px",
            width: "1.5rem",
            marginLeft: "1rem",
          }}
        />
      </IconButton>
    </Stack>
  );
};

export default SearchBar;
