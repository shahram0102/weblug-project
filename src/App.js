// Apollo Client
import { gql, useQuery } from "@apollo/client";

// components
import HomePage from "./components/home/HomePage";
import Layout from "./Layout/Layout";

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
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}

export default App;
