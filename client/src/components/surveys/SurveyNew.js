import React, { useState } from "react";
import SurveyForm from "./SurveyForm";

import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import SurveyFormReview from "./SurveyFormReview";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px",

    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(65),
    },
  },
}));

const SurveyNew = () => {
  const [showSurveyReview, setShowSurveyReview] = useState(false);
  const classes = useStyles();
  const renderSurvey = () => {
    switch (showSurveyReview) {
      case false:
        return <SurveyForm setShowSurveyReview={setShowSurveyReview} />;
      default:
        return <SurveyFormReview setShowSurveyReview={setShowSurveyReview} />;
    }
  };
  return (
    <div className={classes.root}>
      <Paper style={{ backgroundColor: "#fafafa" }}>{renderSurvey()}</Paper>
    </div>
  );
};

export default SurveyNew;
