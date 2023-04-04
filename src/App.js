import { useMemo, useState } from "react";
import { Box, IconButton, ThemeProvider, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import theme from "./theme/theme";
import MiniDrawer from "./sidebar/Drawer";
import LabelBottomNavigation from "./sidebar/BottomNavigation";
import { setMode } from "./state/reducers/themeReducer";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  // const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        dispatch(
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
        );
      },
    }),
    []
  );

  const updatedTheme = useMemo(() => {
    return { ...theme, palette: { ...theme.palette, mode } };
  }, [mode]);

  const isSmallScreen = useMediaQuery(updatedTheme.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={updatedTheme}>
      <div style={{ display: "flex" }}>
        {!isSmallScreen && <MiniDrawer />}
        <Box style={{ marginTop: "55px" }}>
          {updatedTheme.palette.mode} mode
          <IconButton
            style={{ marginLeft: 1, zIndex: 100 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {updatedTheme.palette.mode === "dark" ? "Dark" : "Light"}
          </IconButton>
        </Box>
      </div>
      {isSmallScreen && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
          <LabelBottomNavigation />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
