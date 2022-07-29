import { useQuery } from "@apollo/client";
import { Grid, Container, Avatar, Typography } from "@mui/material";
import React from "react";

import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";

function AuthorPage() {
  const { slug } = useParams();
  console.log(slug);
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <h2>loading</h2>;
  if (error) return <h2>error</h2>;
  
  const { author } = data;

  if (data)
    return (
      <Container maxWidth="lg">
        <Grid container mt={10}>
          <Grid
            item
            display="flex"
            flexDirection="column"
            alignItems="center"
            xs={12}
          >
            <Avatar src={author.avatar.url} sx={{ width: 250, height: 250 }} />
            <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
              {author.name}
            </Typography>
            <Typography
              component="p"
              variant="h5"
              color="text.secondary"
              mt={2}
            >
              {author.field}
            </Typography>
          </Grid>
          <Grid xs={12}>{author.description.html}</Grid>
        </Grid>
      </Container>
    );
}

export default AuthorPage;
