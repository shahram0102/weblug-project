import { gql, useQuery } from "@apollo/client";

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
      <h1>hello</h1>
    </section>
  );
}

export default App;
