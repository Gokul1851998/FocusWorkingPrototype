import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SettingsLogin({ handleClose, setOptions }) {
  const [settingsName, setSettingsName] = React.useState("");
  const [settingsPassword, setSettingsPassword] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (settingsName === "test" && settingsPassword === "test") {
      navigate("/companySettings");
      handleClose();
    }
  };

  return (
    <Paper elevation={6} style={{ padding: "20px", borderRadius: "10px", width: "300px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          LOGIN
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, width: "100%" }}>
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            id="email"
            label="Admin UserName"
            autoComplete="off"
            onChange={(e) => setSettingsName(e.target.value)}
            autoFocus
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            name="password"
            label="Admin Password"
            id="password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setSettingsPassword(e.target.value)}
          />
          <Button
            onClick={handleLogin}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            LOGIN
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

SettingsLogin.propTypes = {
  handleClose: PropTypes.func.isRequired,
  setOptions: PropTypes.func.isRequired,
};
