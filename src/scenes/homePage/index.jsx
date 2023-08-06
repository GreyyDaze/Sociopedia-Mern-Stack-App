import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";

// HomePage functional component
const HomePage = () => {
  // Check if the screen size is non-mobile using useMediaQuery hook
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  // Get the user's _id and picturePath from the Redux store using useSelector hook
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    // Render the HomePage component wrapped in a Box
    <Box>
      {/* Render the Navbar component */}
      <Navbar />
      {/* Main content area with widgets */}
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        {/* Left side of the main content area */}
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          {/* Render the UserWidget component to display user information */}
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>

        {/* Middle part of the main content area */}
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {/* Render the MyPostWidget component to display the user's posts */}
          <MyPostWidget picturePath={picturePath} />
          {/* Render the PostsWidget component to display all posts */}
          <PostsWidget userId={_id} />
        </Box>

        {/* Right side of the main content area (visible only on non-mobile screens) */}
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            {/* Render the AdvertWidget component to display advertisements */}
            <AdvertWidget />
            {/* Add spacing between widgets */}
            <Box m="2rem 0" />
            {/* Render the FriendListWidget component to display the user's friends */}
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

// Export the HomePage component
export default HomePage;
