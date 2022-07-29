import React from "react";

// Apollo Client
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

// Mui
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";

import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="700" flex={1}>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              سی دی وبلاگ
            </Link>
          </Typography>
          <Link to="/" style={{ color: "#fff" }}>
            <LocalLibraryOutlinedIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
