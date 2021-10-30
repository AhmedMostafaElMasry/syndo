import React from "react";
import { Dialog, DialogContent, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));

export default function Popup(props) {
  const { children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogContent>
        <CloseIcon
          style={{ position: "absolute", top: 20, right: 10 }}
          onClick={() => {
            setOpenPopup(false);
          }}
        />
        {children}
      </DialogContent>
    </Dialog>
  );
}
