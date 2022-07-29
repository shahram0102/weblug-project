import React from "react";
import ReactDOM from "react-dom/client";

// Apollo Client
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

// Mui
import { ThemeProvider } from "@mui/system";
import theme from "./mui/theme";

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
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
