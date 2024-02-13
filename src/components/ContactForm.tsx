import TextField from "@mui/material/TextField";
import { Button, Container, Grid } from "@mui/material";

const ContactForm = () => {
  const emailaddress = process.env.REACT_APP_EMAIL_URL;
  return (
    <Container>
      <form action={emailaddress} method="POST">
        <Grid container direction={"column"} sx={{ gap: "20px" }}>
          <TextField
            type="email"
            name="email"
            id="outlined-multiline-flexible"
            label="Email"
            multiline
            maxRows={4}
            color="success"
            focused
          />
          <TextField
            type="text"
            name="name"
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={7}
            color="warning"
            focused
          />
          <div
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Button
              type="submit"
              variant="outlined"
              color="error"
              sx={{ width: "150px" }}
              focusRipple
            >
              Send
            </Button>
          </div>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactForm;
