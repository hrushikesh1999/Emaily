import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(1),
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Fab
        color="primary"
        component={Link}
        to="/surveys/new"
        aria-label="add"
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Dashboard;
