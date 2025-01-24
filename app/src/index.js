import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.scss";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </React.StrictMode>
    </BrowserRouter>
);