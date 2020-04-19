import { Input, TextField } from "@material-ui/core";
import React from "react";


function Controls({ setForm, form }) {
    console.log(`rendering controls with`, form);
    const [formValues, setFormValues] = React.useState({
      countryCount: 0,
      ...form,
    });
  
    const doSubmit = (e) => {
      e.preventDefault();
      setForm(formValues);
    };
  
    const updateFormValues = (e) => {
      e.preventDefault();
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    };
  
    return (
      <form noValidate autoComplete="off" onSubmit={doSubmit}>
        <div>
          <TextField
            id="countryCount"
            name="countryCount"
            label="No. Countries"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            value={formValues.countryCount}
            onChange={updateFormValues}
          />
        </div>
        <div>
          <Input type="submit" label="Update" />
        </div>
      </form>
    );
  }

  export default Controls;