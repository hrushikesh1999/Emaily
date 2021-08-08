import { Button, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px",

    "& > *": {
      margin: theme.spacing(1),
    },
  },
  heading: {
    marginLeft: "30px",
    color: "#757575",
  },
  values: {
    marginLeft: "50px",
  },
  btn: {
    marginTop: "20px",
  },
}));

const SurveyFormReview = ({ form, setShowSurveyReview }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.root} variant="h4">
        Please confirm your entries
      </Typography>
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h6" className={classes.heading}>
          <label>Campaign Title:</label>
        </Typography>
        <Typography className={classes.values}> {form.title}</Typography>
        <Typography variant="h6" className={classes.heading}>
          <label>Subject Line:</label>
        </Typography>
        <Typography className={classes.values}>{form.subject}</Typography>
        <Typography variant="h6" className={classes.heading}>
          <label>Email Body:</label>
        </Typography>
        <Typography className={classes.values}>{form.body}</Typography>
        <Typography variant="h6" className={classes.heading}>
          <label>Recipient List:</label>
        </Typography>
        <Typography className={classes.values}>{form.recipients}</Typography>
        <Button
          onClick={() => setShowSurveyReview(false)}
          variant="contained"
          color="secondary"
          className={classes.btn}
          style={{ marginLeft: "20px" }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ float: "right", marginRight: "20px" }}
          className={classes.btn}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};

export default connect(mapStateToProps)(SurveyFormReview);
