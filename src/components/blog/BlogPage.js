import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BLOG_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { useParams } from "react-router-dom";
import { Grid, Container, Typography, Avatar, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";

function BlogPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });
  //   console.log(loading, data, error);
  if (loading) return <Loader />;
  if (error) return <h2>error</h2>;
  const { author, content, coverPhoto, title } = data.post;
  console.log(author, content, coverPhoto, title);
  if (data)
    return (
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            xs={12}
            mt={9}
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Typography
              component="h2"
              variant="h4"
              color="primary"
              fontWeight={700}
            >
              {title}
            </Typography>
            <ArrowBackIcon onClick={() => navigate(-1)} />
          </Grid>
          <Grid item xs={12} mt={6}>
            <img
              src={coverPhoto.url}
              alt={title}
              width="100%"
              style={{ borderRadius: "15px" }}
            />
          </Grid>
          <Grid item xs={12} mt={8} display="flex" alignItems={"center"}>
            <Avatar
              src={author.avatar.url}
              sx={{ width: 80, height: 80, marginLeft: 3 }}
            />
            <Box component="div">
              <Typography component="p" variant="h5" fontWeight={700}>
                {author.name}
              </Typography>
              <Typography component="p" variant="p" color="text.secondary">
                {author.field}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} mt={5}>
            <div
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }}
            ></div>
          </Grid>
          <Grid item xs={12}>
            <CommentForm slug={slug} />
          </Grid>
        </Grid>
      </Container>
    );
}

export default BlogPage;
