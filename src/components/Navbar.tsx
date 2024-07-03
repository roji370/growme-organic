import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Link, Button } from "@mui/material";
 
const styles = {
  nav: {
    position: "sticky",
    top: "0px",
    backgroundColor: "black",
    ZIndex: 1000,
  },
  navbar: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-around",
  },
  navItem: {
    marginLeft: "20px",
    textDecoration: "none",
    color: "white",
  },
};

const Navbar = () => {
  // Retrieving user data from local storage
  const userDataString = localStorage.getItem("userData");
  
  // Hook for programmatically navigating between pages
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.removeItem("userData");
    navigate("/"); // Redirects to the home page
  };

  return (
    <AppBar position="static" sx={styles.nav}> {/* Static positioning for the AppBar */}
      <Toolbar>
        <Typography variant="h6" component="div" sx={styles.navbar}> {/* Typography for the brand/name */}
          <Link component={RouterLink} to="/" sx={styles.navItem}> {/* Navigation link for the home page */}
            Login
          </Link>
          <Link component={RouterLink} to="/data" sx={styles.navItem}> {/* Navigation link for the data page */}
            Home
          </Link>

          {userDataString && (
            <Button variant="contained" onClick={LogOut}> {/* Logout button */}
              LogOut
            </Button>
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
