import { AppBar, Typography, Toolbar, Box } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Employee App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
