import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Grid, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutation";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [clicked, setClicked] = useState(false);

  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      setName("");
      setEmail("");
      setText("");
      setClicked(true);
    } else {
      toast.warn("تمام فیلد ها باید پر شوند", {
        position: "top-center",
        style: { maxWidth: "300px" },
      });
    }
  };

  if (data && clicked) {
    toast.success("پیام شما با موفقیت ارسال شد", {
      position: "top-center",
      style: { maxWidth: "300px" },
    });
    setClicked(false);
  }
  return (
    <Grid
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0 4px 12px ",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography
          component={"p"}
          variant="h6"
          fontWeight={700}
          color="primary"
        >
          ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="نام کاربری"
          variant="standard"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل کاربری"
          variant="standard"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="پیام کاربر"
          variant="standard"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال اطلاعات
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
