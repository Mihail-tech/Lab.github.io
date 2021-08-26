import React from "react";
import PropTypes from "prop-types";
import { TextField} from "@material-ui/core";
import { get } from "lodash";

const FormikPasswordField = ({ field, form, ...props }) => {
  
  const { errors, touched } = form;
  const error = get(touched, field.name) && get(errors, field.name);

  return (
    <TextField
      color="primary"
      error={!!error}
      variant="outlined"
      helperText={error}
      {...field}
      value={field.value || ""}
      {...props}
      

    />
  );
};

FormikPasswordField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
};

export default FormikPasswordField;
