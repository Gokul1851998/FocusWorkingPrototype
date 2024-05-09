import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { Box, Grid, TextField } from "@mui/material";

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open, setName, setPassword, setOptions } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };



  return (
    <Dialog
      onClose={handleClose}
      open={open}
    
    >
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
              label="UserName"
              autoComplete="off"
              onChange={(e)=>setName(e.target.value)}
              autoFocus
            />
            <div style={{ position: "relative" }}>
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <Button
              
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              LOGIN
            </Button>
          </Box>
        </Box>
      </Grid>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SettingsLogin({ handleClose, open ,setOptions}) {
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const [settingsName, setSettingsName] = React.useState("")
  const [settingsPassword, setSettingsPassword] = React.useState("")


  const handleLogin = ()=>{
    if(settingsName === "test" && settingsPassword === "test"){
      setOptions(true)
      handleClose()
    }
  }
  return (
    <Dialog
      onClose={handleClose}
      open={open}
    
    >
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
              label="UserName"
              autoComplete="off"
              onChange={(e)=>setSettingsName(e.target.value)}
              autoFocus
            />
            <div style={{ position: "relative" }}>
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                type="password"
                autoComplete="current-password"
                onChange={(e)=>setSettingsPassword(e.target.value)}
              />
            </div>
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
      </Grid>
    </Dialog>
  );
}
