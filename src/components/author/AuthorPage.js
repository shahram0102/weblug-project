import { useQuery } from "@apollo/client";
import { Grid, Container, Avatar, Typography } from "@mui/material";
import React from "react";

import sanitizeHtml from "sanitize-html";

import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import CardEL from "../shared/CardEL";
import { minHeight } from "@mui/system";
import Loader from "../shared/Loader";

function AuthorPage() {
  const { slug } = useParams();
  console.log(slug);
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader/>;
  if (error) return <h2>error</h2>;

  const { author } = data;
  console.log(author);

  if (data)
    return (
      <Container maxWidth="lg" xs={{minHeight:"100vh"}}>
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
          <Grid xs={12} mt={5}>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(author.description.html),
              }}
            ></div>
          </Grid>
          <Grid item xs={12} mt={6}>
            <Typography component="h3" variant="h5" fontWeight={500}>
              مقالات: {author.name}
            </Typography>
            <Grid container spacing={2} mt={2}>
              {author.posts.map((post) => {
                return (
                  <Grid key={post.id} xs={12} sm={6} md={3} item>
                    <CardEL
                      title={post.title}
                      slug={post.slug}
                      coverPhoto={post.coverPhoto}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
}

export default AuthorPage;
