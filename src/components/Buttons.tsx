import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
  {
    url: "https://cdn.nord.bazo.dk/images/05f7833d-fe54-4c65-b14e-44c7d34cbda6/d/16-9/s/1280/webp",
    title: "Education",
    width: "30%",
    link: "https://www.ucn.dk/uddannelser/datamatiker",
  },
  {
    url: "https://images.pexels.com/photos/11035544/pexels-photo-11035544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "GitHub",
    width: "30%",
    link: "https://github.com/firas-alalo",
  },
  {
    url: "https://bureaubystorm.dk/wp-content/uploads/2020/09/Den-gode-LI-profil.jpg",
    title: "Connect",
    width: "30%",
    link: "https://www.linkedin.com/in/firasalalo",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const ImageButtons = () => {
  return (
    <Box data-aos="zoom-in">
      {images.map((image) => (
        <a
          href={image.link}
          key={image.title}
          style={{ textDecoration: "none" }}
          target="blank"
          rel="noopener noreferrer"
        >
          <ImageButton
            focusRipple
            style={{
              width: image.width,
              minWidth: 300,
              alignContent: "center",
              justifyContent: "center",
              marginBottom: "10%",
              marginTop: "8%",
              display: "inline-flex",
              margin: "10px",
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image aria-label="images">
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </a>
      ))}
    </Box>
  );
};

export default ImageButtons;
