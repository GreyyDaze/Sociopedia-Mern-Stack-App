import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Create a styled version of the Box component with custom styles
const WidgetWrapper = styled(Box)(({ theme }) => ({
  // Custom padding for the widget container
  padding: "1.5rem 1.5rem 0.75rem 1.5rem",
  // Background color from the theme's alternate background palette
  backgroundColor: theme.palette.background.alt,
  // Rounded corners with a border radius of 0.75rem
  borderRadius: "0.75rem",
}));

export default WidgetWrapper;
