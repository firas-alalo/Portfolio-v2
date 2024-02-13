import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";

// Hardcoded projects data to be replaced with a backend API call to fetch the data from the database and display it in the UI using the map function.
const Projects = () => {
  return (
    <Container style={{ width: "70%" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>✏️ Absence Registration System</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Web app to manage employees absence such as sick days and vacations.
          <Stack direction="row" spacing={1} marginTop={1}>
            <Chip label="React" variant="outlined" />
            <Chip label="JavaScript" variant="outlined" />
            <Chip label="JavaScript" variant="outlined" />
            <Chip label="CSS" variant="outlined" />
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>✏️ Assets Management App</Typography>
        </AccordionSummary>
        <AccordionDetails>
          React app to manage create, edit and approve data by users.
          <Stack direction="row" spacing={1} marginTop={1}>
            <Chip label="React" variant="outlined" />
            <Chip label="JavaScript" variant="outlined" />
            <Chip label="JavaScript" variant="outlined" />
            <Chip label="CSS" variant="outlined" />
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>✏️ My Portfolio</Typography>
        </AccordionSummary>
        <AccordionDetails>
          This is the personal website you are reading this on right now.
          <Stack direction="row" spacing={1} marginTop={1}>
            <Chip label="TypeScript" variant="outlined" />
            <Chip label="React" variant="outlined" />
            <Chip label="MaterialUI" variant="outlined" />
            <Chip label="CSS" variant="outlined" />
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>✏️ Clothing shop ordering system</Typography>
        </AccordionSummary>
        <AccordionDetails>
          A WindowsForm app to manage sales and invoice of BobbyLine clothing
          shop on Læsø island.
          <Stack direction="row" spacing={1} marginTop={1}>
            <Chip label="Java" variant="outlined" />
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>✏️ BlogitMate! Personal Blog</Typography>
        </AccordionSummary>
        <AccordionDetails>
          A blog to share personal knowledge and experience.
          <Stack direction="row" spacing={1} marginTop={1}>
            <Chip label="React" variant="outlined" />
            <Chip label="JavaScript" variant="outlined" />
            <Chip label="JavaScript" variant="outlined" />
            <Chip label="CSS" variant="outlined" />
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>✏️ HMI Solution for vessels</Typography>
        </AccordionSummary>
        <AccordionDetails>
          I collaborated during my internship at Frugal Technologies on this
          project to develop further in a software to exchange various data with
          sensors on vessels, using MQTT protocol.
          <Stack direction="row" spacing={1} marginTop={1}>
            <Chip label="Qt Framework" variant="outlined" />
            <Chip label="Python" variant="outlined" />
            <Chip label="MQTT Protocol" variant="outlined" />
            <Chip label="QML" variant="outlined" />
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>✏️ AI Mail Classifier</Typography>
        </AccordionSummary>
        <AccordionDetails>
          I collaborated with a company in Denmark "Norriq" for the final
          project of my computer science education to develop a software to
          classify mails using AI model and prompt engineering.
          <Stack direction="row" spacing={1} marginTop={1}>
            <Chip label="C#" variant="outlined" />
            <Chip label="AI" variant="outlined" />
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>✏️ Online Supermarket</Typography>
        </AccordionSummary>
        <AccordionDetails>
          MVC webapp to go shopping online, with secured payment system.
          <Stack direction="row" spacing={1} marginTop={1}>
            <Chip label="C#" variant="outlined" />
            <Chip label="HTML" variant="outlined" />
            <Chip label="CSS" variant="outlined" />
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>✏️ Football Web App</Typography>
        </AccordionSummary>
        <AccordionDetails>Scheduled project.</AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default Projects;
