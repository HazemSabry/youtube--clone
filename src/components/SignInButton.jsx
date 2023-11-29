import SignInUserIcon from "../assets/Sign-in-user.png";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignInButton = () => {
  const navigate = useNavigate();

  return (
    <button className="sign-in-btn" onClick={() => navigate("/signin")}>
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
