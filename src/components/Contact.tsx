import { useEffect } from "react";
import styles from "../styles/Contact.module.css";
import ContactForm from "./ContactForm";
import { Box, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Box
      className={styles.sectionFour}
      id="contact-section"
      data-aos="fade-left"
    >
      <Grid
        item
        container
        xs={12}
        style={{ maxWidth: "700px", margin: "0 auto" }}
      >
        <Grid item xs display="flex">
          <h2 className={styles.text}>
            For any inquiries, please feel free to reach out
          </h2>
        </Grid>
        <Grid item xs={12}>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
