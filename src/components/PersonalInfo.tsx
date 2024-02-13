import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import styles from "../styles/PersonalInfo.module.css";
import me from "../images/me.jpg";

const PersonalInfo = () => {
  const code = `const coder👨‍💻 = {
    🔴 name🪪: "Firas Alalo",
    🔴 hardWorker❓: true,
    🔴 learningAddict❔: true,
    🔴 location📍: "Aalborg, Denmark",
    🔴 education📝: "Computer Science",
    🔴 languages🌐: ["Danish", "English", "Arabic"],
  };`;

  const [typedCode, setTypedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < code.length) {
      const timer = setTimeout(() => {
        setTypedCode(code.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 35); // Adjust typing speed here

      return () => clearTimeout(timer);
    }
  }, [currentIndex, code]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} minHeight={160}>
        <Grid
          item
          xs
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img
            className={styles.meImage}
            src={me}
            alt={"me"}
            style={{ marginTop: "50px", marginBottom: "50px" }}
          />
        </Grid>
        <Grid
          item
          xs
          display="flex"
          justifyContent="left"
          alignItems="center"
          className={styles.codeContainer}
        >
          <pre className={styles.codeDisplay}>
            <code>{typedCode}</code>
            <span className={styles.cursor}>|</span>
          </pre>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInfo;
