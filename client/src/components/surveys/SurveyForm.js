import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import validateEmails from "../../utils/validateEmails";
import { connect } from "react-redux";
import * as actions from "../../actions";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { FormGroup } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginLeft: "20px",
      marginRight: "20px",
    },
  },
  btn: {
    marginTop: "20px",
  },
}));

const SurveyForm = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { title: "bob" },
  });
  const onSubmit = (data) => {
    console.log(data);
    props.updateFormData(data);
    props.setShowSurveyReview(true);
  };

  const classes = useStyles();
  // const { ref, ...rest } = register("title", {
  //   required: "you must provide a value",
  // });
  // const { subjectRef, ...subjectRest } = register("subject", {
  //   required: "you must provide a value",
  // });
  // const { bodyRef, ...bodyRest } = register("body", {
  //   required: "you must provide a value",
  // });
  // const { recipientsRef, ...recipientsRest } = register("recipients", {
  //   validate: (emails) => validateEmails(emails),
  // });

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>
        <TextField
          error={!!errors.title}
          id="outlined-full-width"
          fullWidth
          label="Campaign Title"
          style={{ marginTop: "40px" }}
          {...register("title", {
            required: "you must provide a value",
          })}
          helperText={errors?.title?.message}
        ></TextField>

        <TextField
          defaultValue={props?.form?.subject}
          error={!!errors.subject}
          id="outlined-full-width"
          fullWidth
          label="Subject Line"
          style={{ marginTop: "40px" }}
          {...register("subject", {
            required: "you must provide a value",
          })}
          helperText={errors?.subject?.message}
        ></TextField>
        <TextField
          defaultValue={props?.form?.body}
          error={!!errors.body}
          id="outlined-full-width"
          fullWidth
          label="Email Body"
          style={{ marginTop: "40px" }}
          {...register("body", {
            required: "you must provide a value",
          })}
          helperText={errors?.body?.message}
        ></TextField>
        <TextField
          defaultValue={props?.form?.recipients}
          error={!!errors.recipients}
          id="outlined-full-width"
          fullWidth
          label="Recipient List"
          style={{ marginTop: "40px" }}
          {...register("recipients", {
            validate: (emails) => validateEmails(emails),
          })}
          helperText={errors?.recipients?.message}
        ></TextField>
        <div className={classes.btn}>
          <Button
            component={Link}
            to="/surveys"
            variant="contained"
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ float: "right" }}
          >
            Next
            <CheckIcon
              fontSize="small"
              style={{ marginLeft: "2px", marginBottom: "2px" }}
            ></CheckIcon>
          </Button>
        </div>
      </FormGroup>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};

export default connect(mapStateToProps, actions)(SurveyForm);
