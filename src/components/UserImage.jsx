import { Box } from "@mui/material";

// UserImage functional component
const UserImage = ({ image, size = "60px" }) => {
  return (
    // Create a Box container with specified width and height for the user image
    <Box width={size} height={size}>
      {/* Render the user image as an img tag */}
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        // The src attribute points to the user's image on the server (assumed to be at http://localhost:3001/assets/)
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

// Export the UserImage component to be used in other parts of the application
export default UserImage;
