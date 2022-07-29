import React from "react";
// Apollo client
import { useQuery } from "@apollo/client";

// graphql
import { GET_AUTHORS_INFO } from "../../graphql/queries";

// Mui
import { Grid, Avatar, Typography, Divider } from "@mui/material";

// React Route Dom
import { Link } from "react-router-dom";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  console.log(loading, data, error);
  if (loading) return <h2>loading</h2>;
  if (error) return <h2>error</h2>;
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
      }}
    >
      {data.authors.map((author, index) => {
        return (
          <React.Fragment key={author.id}>
            <Grid item xs={12} padding={2}>
              <Link
                to={`/authors/${author.slug}`}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
                <Typography component="p" variant="p" color="text.secondary">
                  {author.name}
                </Typography>
              </Link>
            </Grid>
            {index != data.authors.length - 1 && (
              <Grid item xs={12}>
                <Divider variant="middle" />
              </Grid>
            )}
          </React.Fragment>
        );
      })}
    </Grid>
  );
}

export default Authors;
