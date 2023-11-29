import SignInUserIcon from "../assets/Sign-in-user.png";
import { Typography } from "@mui/material";

const SignInButton = () => {
  return (
    <button className="sign-in-btn">
      <img src={SignInUserIcon} alt="Sign in user icon" />
      <Typography
        className="copyright"
        variant="body1"
        sx={{ px: { sx: 0, md: 1 } }}
      >
        Sign in
      </Typography>
    </button>
  );
};

export default SignInButton;
