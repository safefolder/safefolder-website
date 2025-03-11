import { createTheme } from '@mui/material/styles';
import themeData from "./theme.json";

const themeName = 'My custom theme name';
export default createTheme({ ...themeData, themeName });