import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import firaslogo from "../images/firaslogo.png";
import { Button, ButtonGroup } from "@mui/material";

// To override the backgroundColor prop or other props from MUI
// const CustomAppBar = styled(AppBar)({
//   backgroundColor: "#761515",
// }) as typeof AppBar;

const NavBar = () => {
  function scrollToProjects() {
    var contactSection = document.getElementById("projects-section");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToContact() {
    var contactSection = document.getElementById("contact-section");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        // variant=""
        elevation={0}
        sx={{ backgroundColor: "#761515" }}
      >
        <Toolbar>
          <a href="/">
            <img src={firaslogo} alt={"firaslogo"} width="175" />
          </a>
          <Typography
            variant="overline"
            marginLeft={2}
            align="left"
            sx={{ flexGrow: 1 }}
          >
            Portfolio
          </Typography>
          <ButtonGroup
            variant="text"
            color="inherit"
            aria-label="text button group"
          >
            <Button onClick={scrollToProjects}>Projects</Button>
            <Button onClick={scrollToContact}>Contact</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
