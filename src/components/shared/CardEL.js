import React from "react";

// Mui
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Avatar,
  Typography,
  Divider,
  Button,
} from "@mui/material";

// React Route Dom
import { Link } from "react-router-dom";

function CardEL({ author, title, slug, coverPhoto }) {
  return (
    <Card
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 4 }} />}
          title={
            <Typography component="p" variant="p" color="text.primary">
              {author.name}
            </Typography>
          }
        />
      )}

      <CardMedia
        component="img"
        image={coverPhoto.url}
        height={194}
        alt={slug}
      />
      <CardContent sx={{ height: "fit-content" }}>
        <Typography
          component="h3"
          variant="h6"
          color="text.secondary"
          fontWeight={600}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            خواندن مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEL;
