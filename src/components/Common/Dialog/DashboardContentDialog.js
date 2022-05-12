import React from "react";

import {
  Button,
  Dialog,
  CloseIcon,
  DialogContent,
  Grid,
  DialogContentText,
  DialogActions,
  Typography,
} from "@material-ui/core";

const DashboardContentDialog = (props) => (
  <div>
    <Dialog
      open={props.isOpen}
      disableEscapeKeyDown
      disableBackdropClick
      onClose={() => props.handleClose(false)}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h5">
            {props.title}
          </Typography>
        </Grid>
        <DialogContentText id="alert-dialog-description">
          A fact is something that is true. The usual test for a statement of
          fact is verifiability, that is whether it can be demonstrated to
          correspond to experience. Standard reference works are often used to
          check facts. Scientific facts are verified by repeatable careful
          observation or measurement by experiments or other means.
        </DialogContentText>
        <DialogActions>
          {!!props.cancelTxt && (
            <Button
              size="large"
              variant="contained"
              onClick={() => props.handleClose(false)}
            >
              {props.cancelTxt}
            </Button>
          )}
          {!!props.okTxt && (
            <Button
              onClick={() => props.handleClose(true)}
              color="secondary"
              size="large"
              variant="contained"
            >
              {props.okTxt}
            </Button>
          )}
        </DialogActions>
      </DialogContent>
    </Dialog>
  </div>
);

export default DashboardContentDialog;
