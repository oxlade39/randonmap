import { Input, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import SaveIcon from '@material-ui/icons/Save'

const styles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    button: {
        marginTop: theme.spacing(1),
    },
  }))

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

    const classes = styles();
  
    return (
      <form noValidate autoComplete="off" onSubmit={doSubmit} className={classes.root}>
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
          <Button
            variant="contained"
            color="primary"
            size="small"
            type="submit"
            component="span"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            <Input type="submit" size="small">Save</Input>
            </Button>
      </form>
    );
  }

  export default Controls;