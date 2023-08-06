// Importing required dependencies from Material-UI and custom components.
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

// AdvertWidget component
const AdvertWidget = () => {
  // Access the current theme object using the useTheme() hook from Material-UI.
  const { palette } = useTheme();

  // Extract color values from the theme for later use.
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    // Custom WidgetWrapper component used to wrap the content of the widget.
    <WidgetWrapper>
      {/* FlexBetween component arranges its children in a flexbox layout */}
      <FlexBetween>
        {/* Typography component to display the "Sponsored" title in a specific color and font weight */}
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        {/* Typography component to display the "Create Ad" text in a medium color */}
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>

      {/* Image element displaying the advertisement image */}
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />

      {/* FlexBetween component again */}
      <FlexBetween>
        {/* Typography component to display the company name in the main color */}
        <Typography color={main}>MikaCosmetics</Typography>
        {/* Typography component to display the website URL in a medium color */}
        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween>

      {/* Typography component to display the advertisement description in a medium color */}
      <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty and made sure your skin
        is exfoliating skin and shining like light.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
