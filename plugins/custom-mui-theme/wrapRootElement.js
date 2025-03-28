import React from "react"
import { ThemeProvider } from '@mui/material/styles';

import theme from "./theme"

export const wrapRootElement = ({ element }) => {
  console.info(`theme`, theme)
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}