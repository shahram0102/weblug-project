import { gql, useQuery } from "@apollo/client";
import Header from "./components/Header";

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
    <section>
      <Header />
    </section>
  );
}

export default App;
