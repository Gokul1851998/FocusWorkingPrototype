import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { imageIcon, loginPassword, userId, userName } from "../../config";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SettingsIcon from "@mui/icons-material/Settings";
import BusinessIcon from "@mui/icons-material/Business";
import RestoreIcon from "@mui/icons-material/Restore";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton, Popover, Tooltip } from "@mui/material";
import WarningMessage from "../../components/Warning/Warnings";
import SettingsLogin from "./SettingsLogin";

const idleTime = 10 * 60 * 1000;

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [sLoginName, setLoginName] = React.useState("");
  const [sPassword, setSPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [settings, setSettings] = useState(false);
  const [options, setOptions] = useState(false);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (sPassword && sLoginName) {
      handleLoaderOpen();
      if (sPassword === loginPassword && sLoginName === userName) {
        localStorage.setItem("userId", userId);
        localStorage.setItem("userName", userName);
        const currentTime = new Date().getTime();
        const expirationTime = currentTime + idleTime;
        localStorage.setItem("timeStamp", expirationTime);
        navigate("/home");
      } else {
        setEmailError(true);
        setPasswordError(true);
        setAlertType("warning");
        setMessage("Incorrect UserName or PassWord");
        handleAlertOpen();
      }
      handleLoaderClose();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleLoaderClose = () => {
    setLoader(false);
  };

  const handleLoaderOpen = () => {
    setLoader(true);
  };

  const handleAlertOpen = () => {
    setAlert(true);
  };

  const handleAlertClose = () => {
    setAlert(false);
  };



  const handleSettingsLoginOpen = (event) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingsLoginClose = () => {
    setSettingsAnchorEl(null);
  };

  const settingsOpen = Boolean(settingsAnchorEl);
  const settingsId = settingsOpen ? "settings-popover" : undefined;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        sx={{
          background: `linear-gradient(0deg, #1b77e9, #1842b6)`,
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          position: "relative",
        }}
        container
        component="main"
      >
        <Box sx={{ position: "absolute", top: 0, right: 0, margin: "10px" }}>
          <Tooltip title="Settings">
            <IconButton
              onClick={handleSettingsLoginOpen}
              aria-label="Settings"
              sx={{ color: "white", fontSize: "32px" }}
            >
              <SettingsIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Tooltip>
          {/* {options ? (
          <>
            <Tooltip title="Create Company">
              <IconButton
                aria-label="Create company"
                sx={{ color: "white", fontSize: "32px" }}
              >
                <BusinessIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Restore Company">
              <IconButton
                aria-label="Restore company"
                sx={{ color: "white", fontSize: "32px" }}
              >
                <RestoreIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Protected Company">
              <IconButton
                aria-label="Protected company"
                sx={{ color: "white", fontSize: "32px" }}
              >
                <AssuredWorkloadIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Keyboard">
              <IconButton
                aria-label="Keyboard "
                sx={{ color: "white", fontSize: "32px" }}
              >
                <KeyboardIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Refresh">
              <IconButton
                aria-label="Refresh"
                sx={{ color: "white", fontSize: "32px" }}
              >
                <RefreshIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Tooltip>
          </>
        ) : null} */}
        </Box>
     
        <Grid
          item
          xs={10}
          sm={8}
          md={6}
          lg={4}
          borderRadius={2}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={imageIcon} alt="Logo" style={{ width: "80px" }} />

            <Typography component="h1" variant="h5">
              LOGIN
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, width: "100%" }}
            >
              <TextField
                error={emailError}
                onChange={(e) => (
                  setLoginName(e.target.value), setEmailError(false)
                )}
                margin="normal"
                size="small"
                required
                fullWidth
                id="email"
                label="UserName"
                autoComplete="off"
                autoFocus
              />
              <div style={{ position: "relative" }}>
                <TextField
                  error={passwordError}
                  onChange={(e) => (
                    setSPassword(e.target.value), setPasswordError(false)
                  )}
                  margin="normal"
                  size="small"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"} // Toggle type based on showPassword state
                  id="password"
                  autoComplete="current-password"
                  onKeyDown={handleKeyPress}
                />
                <div
                  onClick={handleTogglePasswordVisibility}
                  style={{
                    position: "absolute",
                    top: "60%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: passwordError ? "red" : "gray",
                  }}
                >
                  {showPassword ? <LockOpenIcon /> : <LockIcon />}
                </div>
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                LOGIN
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <WarningMessage
        open={alert}
        handleClose={handleAlertClose}
        message={message}
        type={alertType}
      />
      {/* {options? null : (<SettingsLogin open={settings} handleClose={handleSettingsLoginClose} setOptions={setOptions} />)} */}
      <Popover
        id={settingsId}
        open={settingsOpen}
        anchorEl={settingsAnchorEl}
        onClose={handleSettingsLoginClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <SettingsLogin handleClose={handleSettingsLoginClose} open={settingsOpen} setOptions={setOptions} />
      </Popover>
    </ThemeProvider>
  );
}
