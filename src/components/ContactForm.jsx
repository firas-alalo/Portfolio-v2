import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid } from "@mui/material";
import ResultMessage from "./ResultMessage";

const ContactForm = () => {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  const [emailError, setEmailError] = useState(false);
  const [sending, setSending] = useState(false); // State variable to track sending state
  const [resultMessage, setResultMessage] = useState({
    show: false,
    message: "",
    severity: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = form.current["user_email"].value;

    if (!validateEmail(userEmail)) {
      setEmailError(true);
      return;
    }

    setSending(true); // Set sending state to true

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setResultMessage({
            show: true,
            message: "Message sent successfully!",
            severity: "success",
          });
          form.current.reset();
          setSending(false);
        },
        (error) => {
          setSending(false);
        }
      );
  };

  return (
    <Container>
      <form ref={form} onSubmit={sendEmail}>
        <Grid container direction={"column"} sx={{ gap: "20px" }}>
          <TextField
            label="Name"
            type="text"
            name="user_name"
            multiline
            maxRows={4}
            focused
            required
          />
          <TextField
            label="Email"
            type="email"
            name="user_email"
            multiline
            maxRows={4}
            focused
            required
            error={emailError}
            onChange={() => setEmailError(false)}
            helperText={emailError ? "Please enter a valid email" : ""}
          />
          <TextField
            label="Message"
            name="message"
            rows={7}
            color="success"
            focused
            multiline
            required
          />

          <div
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Button
              type="submit"
              value="Send"
              color="error"
              variant="outlined"
              sx={{ width: "150px" }}
              focusRipple
              disabled={sending} // Disable the button while sending is in progress
            >
              {sending ? "Sending..." : "Send"}
            </Button>
          </div>
        </Grid>
      </form>
      {resultMessage.show && (
        <ResultMessage
          message={resultMessage.message}
          severity={resultMessage.severity}
          onClose={() => setResultMessage({ show: false })}
        />
      )}
    </Container>
  );
};

export default ContactForm;
