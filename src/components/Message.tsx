import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearMessage } from "../store/modules/MessageSlice";

const Message: React.FC = () => {
  const [open, setOpen] = useState(false);
  const messageRedux = useAppSelector((state) => state.message);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (messageRedux.msg !== "" && messageRedux.type !== "") {
      setOpen(true);
    }
  }, [messageRedux]);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(clearMessage());
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert
          onClose={handleClose}
          severity={messageRedux.type ? messageRedux.type : "info"}
          sx={{ width: "100%" }}
        >
          {messageRedux.msg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Message;
