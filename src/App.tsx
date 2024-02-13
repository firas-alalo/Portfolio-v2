import { Container, Grid } from "@mui/material";
import Intro from "./components/Intro";
import PersonalInfo from "./components/PersonalInfo";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import NavBar from "./components/Navbar";
import "./App.css";
import ImageButtons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <Container>
        <Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NavBar />
            <Intro />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <PersonalInfo />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <TechStack />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Contact />
          </Grid>

          <Grid item xs={12} sm={6} md={3}></Grid>
          <ImageButtons />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
