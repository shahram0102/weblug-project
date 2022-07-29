import React from "react";

// Apollo client , graphql
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";

// Mui
import { Grid } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  if (loading) return <Loader />;
  if (error) return <h2>error</h2>;
  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => {
        return (
          <Grid key={post.id} item xs={12} sm={6} md={4}>
            <CardEL {...post} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Blogs;
