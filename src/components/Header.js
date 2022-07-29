import React from "react";

// Apollo Client
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

// Mui
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="700" flex={1}>
            سی دی وبلاگ
          </Typography>
          <LocalLibraryOutlinedIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
