import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: {
    friends: [], // Set friends as an empty array
  },
  token: null,
  posts: [],
};

/* The createSlice function internally generates action types, action creators,
and a reducer based on the provided configuration. */

export const authSlice = createSlice({
  // name of slice in redux store
  name: "auth",
  //inital state of slice
  initialState,
  // reducers function for specific action to update state
  reducers: {
    //state and action parameters are provided by the Redux toolkit
    //state represents current state
    //action represents the action object dispatched to reducer fuction it includes
    //the type and payload

    //toggle the mode when the reducer function is invoked
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },

    //update the state(user, token) based on payload available in action object
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },

    //updates friend in the user object
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },

    //updates the post that is made available through payload
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },

    //update a single post in post array and return the post array
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;

/* When you call setLogin({ user: userData, token: tokenData }), the action creator is
invoked, and it returns an action object with a type property set to "auth/setLogin" 
and a payload property set to the provided payload object.
This action object is then dispatched to the Redux store, and the corresponding reducer
defined within the createSlice configuration will handle it and update the state
accordingly.
*/
