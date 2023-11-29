import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { Stack, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";
import SignInButton from "./SignInButton";
import SettingMenuVertical from "../assets/setting-menu-vertical.png";

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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          className="setting-menu-vertical-btn"
          src={SettingMenuVertical}
          alt="setting"
        />
        <SignInButton />
      </Box>
    </Stack>
  );
};

export default Navbar;
