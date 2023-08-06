import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "./theme";

function App() {
  // Get the current 'mode' value from the Redux store
  const mode =  useSelector((state) => state.mode);
  
  // Generate the theme based on the 'mode' value using useMemo
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
      {/* Provide the generated theme to all child components */}
      <ThemeProvider theme={theme}>
        {/* Apply a global CSS reset */}
        <CssBaseline />

        {/* Define the routing structure of the application */}
        <Routes>
          {/* Render the LoginPage component when the URL matches '/' */}
          <Route path="/" element={ <LoginPage /> }/>

          {/* Render the HomePage component when the URL matches '/home' */}
          <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" /> }/>

          {/* Render the ProfilePage component when the URL matches '/profile/:userId' */}
          <Route path="/profile/:userId" element={isAuth ? <ProfilePage />  : <Navigate to="/" /> }/>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
