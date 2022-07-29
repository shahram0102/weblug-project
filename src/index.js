import React from "react";
import ReactDOM from "react-dom/client";

import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

import "./index.css";
import App from "./App";

const client = new ApolloClient({
  uri:"https://api-ca-central-1.hygraph.com/v2/cl65cu6jm8z2301utflty7zxv/master",
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
