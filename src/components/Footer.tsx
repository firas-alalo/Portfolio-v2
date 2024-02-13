import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://firas.dk/">
        firas.dk
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const StickyFooter = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "50px",
        backgroundColor: theme.palette.mode === "dark" ? "#303030" : "#DEDEDE",
        color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body1" textAlign="center">
          Firas Alalo | Personal Website | Denmark
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default StickyFooter;
