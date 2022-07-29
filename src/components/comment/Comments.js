import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST_COMMENT } from "../../graphql/queries";
import { Grid, Typography, Box, Avatar } from "@mui/material";

function Comments({ slug }) {
  const { loading, data, error } = useQuery(GET_POST_COMMENT, {
    variables: { slug },
  });
  console.log(data);
  if (loading) return null;
  if (error) return <h2>error</h2>;
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
        {data.comments.map((comment) => {
          return (
            <Grid
              item
              xs={12}
              key={comment.id}
              m={2}
              border="1px solid silver"
              borderRadius={"5px"}
              p={2}
            >
              <Box
                component="div"
                mb={3}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Avatar>{comment.name[0]}</Avatar>
                <Typography
                  component="span"
                  variant="p"
                  fontWeight={700}
                  mr={2}
                >
                  {comment.name}
                </Typography>
              </Box>
              <Typography component="p" variant="p">
                {comment.text}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Comments;
