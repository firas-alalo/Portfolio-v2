import { useEffect } from "react";
import styles from "../styles/TechStack.module.css";
import JavaScript from "../images/TechStack/JavaScript.png";
import ReactLogo from "../images/TechStack/ReactLogo.png";
import PythonLogo from "../images/TechStack/PythonLogo.png";
import SQL from "../images/TechStack/SQL.png";
import HTML5 from "../images/TechStack/HTML5.webp";
import CSS3 from "../images/TechStack/CSS3.png";
import Java from "../images/TechStack/Java.png";
import CSharp from "../images/TechStack/CSharp.png";
import Git from "../images/TechStack/Git.png";
import QtLogo from "../images/TechStack/QtLogo.png";
import TypeScript from "../images/TechStack/TypeScript.png";
import { Container, Divider, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./Projects";

const TechStack = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Container className={styles.TechStack}>
      <Divider color="red" sx={{ margin: 15 }} />

      <h3 className={styles.text}>My work revolves around</h3>
      <Grid
        data-aos="fade-up"
        item
        container
        direction={"row"}
        spacing={1}
        className={styles.techGrid}
      >
        <img className={styles.StackImage} src={ReactLogo} alt="ReactLibrary" />
        <img className={styles.StackImage} src={JavaScript} alt="JavaScript" />
        <img className={styles.StackImage} src={PythonLogo} alt="PythonLogo" />
        <img className={styles.StackImage} src={TypeScript} alt="TypeScript" />

        <img className={styles.StackImage} src={SQL} alt="SQL" />
      </Grid>

      <h3 className={styles.textTwo}>With a foundation in</h3>
      <Grid
        data-aos="fade-up"
        item
        container
        direction={"row"}
        spacing={1}
        className={styles.techGrid}
      >
        <img className={styles.SecStackImage} src={Java} alt="Java" />
        <img className={styles.SecStackImage} src={CSharp} alt="CSharp" />
        <img className={styles.SecStackImage} src={HTML5} alt="HTML5" />
        <img className={styles.SecStackImage} src={CSS3} alt="CSS3" />
        <img className={styles.SecStackImage} src={Git} alt="Git" />
        <img className={styles.SecStackImage} src={QtLogo} alt="QtLogo" />
      </Grid>

      <Divider color="red" sx={{ margin: 10 }} id="projects-section" />

      <div data-aos="fade-right">
        <h1 className={styles.textThree}>
          Some projects I've contributed to throughout my journey
        </h1>
        <div className={styles.projectsButton}>
          <Projects />
        </div>
      </div>
      <Divider color="red" sx={{ margin: 10 }} />
    </Container>
  );
};

export default TechStack;
