// Apollo Client
import { gql, useQuery } from "@apollo/client";
import Header from "./components/Header";

// components
import HomePage from "./components/home/HomePage";

function App() {
  const QUERY = gql`
    query {
      authors {
        name
      }
    }
  `;
  const { loading, data, error } = useQuery(QUERY);
  console.log(loading, data, error);
  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}

export default App;
