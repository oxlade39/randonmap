import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageIcon from "@material-ui/icons/Image";
import RefreshIcon from "@material-ui/icons/Refresh";
import React from "react";
import { exportFileName, svgId } from "../../constants";
import CountryList from "./CountryList";

const saveSvgAsPng = require("save-svg-as-png");

const imageOptions = {
  scale: 5,
  encoderOptions: 1,
  backgroundColor: "white",
};

const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(1),
    margin: theme.spacing(0.5),
    fontSize: "0.5em",
  },
  listItemIcon: {
    minWidth: theme.spacing(3),
  },
}));

function Controls({ onUpdate, defaultValues, selected }) {
  const [formValues, setFormValues] = React.useState({    
    ...defaultValues,
  });

  const doSubmit = (e) => {
    e.preventDefault();
    onUpdate(formValues);
  };

  const updateFormValues = (e) => {
    e.preventDefault();
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const saveSvg = (e) => {
    e.preventDefault();
    saveSvgAsPng.saveSvgAsPng(
      document.getElementById(svgId),
      exportFileName,
      imageOptions
    );
  };

  const classes = styles();

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        onSubmit={doSubmit}
        className={classes.root}
      >        
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
          <Button
            variant="contained"
            color="primary"
            size="small"
            component="span"
            className={classes.button}
            startIcon={<RefreshIcon />}
            onClick={doSubmit}
          >
            Update
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            component="span"
            className={classes.button}
            startIcon={<ImageIcon />}
            onClick={saveSvg}
          >
            Export
          </Button>
        </div>
      </form>
      <div>
        <CountryList countries={selected} />
      </div>
    </>
  );
}

export default Controls;
