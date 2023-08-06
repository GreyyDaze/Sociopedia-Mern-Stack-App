// Importing required dependencies from Material-UI and custom components.
import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";

// FriendListWidget component
const FriendListWidget = ({ userId }) => {
  // Access the dispatch function to trigger actions in the Redux store.
  const dispatch = useDispatch();

  // Access the current theme object using the useTheme() hook from Material-UI.
  const { palette } = useTheme();

  // Get the token and friends array from the Redux store using useSelector.
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  // Function to fetch and set friends data from the server.
  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    // Dispatch an action to set the fetched friends data into the Redux store.
    dispatch(setFriends({ friends: data }));
  };

  // useEffect hook to fetch friends data when the component mounts.
  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    // Custom WidgetWrapper component used to wrap the content of the widget.
    <WidgetWrapper>
      {/* Typography component to display the "Friend List" title with specific styles */}
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>

      {/* Box component to arrange the Friend components in a column with spacing */}
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {/* Mapping over the friends array and rendering Friend components */}
        {friends && friends.length > 0 ? (
          friends.map((friend) => (
            <Friend
              key={friend._id}
              friendId={friend._id}
              name={`${friend.firstName} ${friend.lastName}`}
              subtitle={friend.occupation}
              userPicturePath={friend.picturePath}
            />
          ))
        ) : (
          <Typography color={palette.neutral.medium}>No friends yet</Typography>
        )}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
