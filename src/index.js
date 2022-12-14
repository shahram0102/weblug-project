import React from "react";
import ReactDOM from "react-dom/client";

// Apollo Client
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

// Mui
import { ThemeProvider } from "@mui/system";
import theme from "./mui/theme";

// React Router Dom
import { BrowserRouter } from "react-router-dom";

// components && styles
import "./styles/index.css";
import "./styles/foonts.css";
import App from "./App";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
