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
  uri: "https://api-ca-central-1.hygraph.com/v2/cl65cu6jm8z2301utflty7zxv/master",
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
