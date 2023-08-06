import { Box } from "@mui/material";
import { styled } from "@mui/system";

// iif return object which is passed to the function returned by styled(box)
//this fuction combines Combines the base component (Box) with the defined styles 
// to create the styled component.
const FlexBetween = styled(Box)(
    // immediately invoked function returns object literal with specific properties
    {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
});

export default FlexBetween;
