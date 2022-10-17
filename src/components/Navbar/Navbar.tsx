import { AppBar, Typography, Toolbar, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to="/">
            <Typography variant="h6" component="div">
              Employee App
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
