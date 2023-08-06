import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

// LoginPage component responsible for rendering the login page
const LoginPage = () => {
  // Get the current theme using MUI's useTheme hook
  const theme = useTheme();

  // Check if the screen size is non-mobile (width >= 1000px) using MUI's useMediaQuery hook
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    // Main container for the login page
    <Box>
      {/* Header section */}
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        {/* Website title */}
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Sociopedia
        </Typography>
      </Box>

      {/* Login form section */}
      <Box
        // Set the width of the form based on screen size
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        {/* Welcome message */}
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Socipedia, the Social Media for Sociopaths!
        </Typography>

        {/* Render the login form component */}
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
