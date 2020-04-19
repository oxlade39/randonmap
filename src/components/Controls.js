import { Button, Input, List, ListItem, ListItemIcon, ListItemText, TextField, IconButton} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RefreshIcon from '@material-ui/icons/Refresh';
import React from "react";
import ImageIcon from '@material-ui/icons/Image';

const saveSvgAsPng = require('save-svg-as-png')

const imageOptions = {
  scale: 5,
  encoderOptions: 1,
  backgroundColor: 'white',
}

const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  },
  button: {
    marginTop: theme.spacing(1),
  },
  listItemIcon: {
    minWidth: theme.spacing(3),
  }
}))

function Controls({ svgId, setForm, form, selected }) {
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

  const saveSvg = (e) => {
    e.preventDefault();
    saveSvgAsPng.saveSvgAsPng(document.getElementById(svgId), 'shapes.png', imageOptions);
  }

  const classes = styles();

  return (
    <>
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
          startIcon={<RefreshIcon />}
        >
          <Input type="submit" size="small" label="Update" value="Update" />
        </Button>
        <Button 
          variant="contained"
          color="secondary"
          size="small"
          type="submit"
          component="span"
          className={classes.button}
          startIcon={<ImageIcon />}
          onClick={saveSvg}>          
            <Input type="submit" size="small" label="Update" value="Save" />
        </Button>
      </form>
      <div>
        <List component="nav" className={classes.root}>
          {selected.map((geo, index) => {
            return (
              <ListItem button key={geo.rsmKey}>
                <ListItemIcon className={classes.listItemIcon}>
                  {index + 1}
                </ListItemIcon>
                <ListItemText primary={geo.properties["NAME"]} />
              </ListItem>
            )
          })}
        </List>
      </div>
    </>
  );
}

export default Controls;