import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import {Provider} from 'react-redux'
import "./index.scss";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </ThemeProvider>
);
