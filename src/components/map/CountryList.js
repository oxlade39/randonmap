import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const styles = makeStyles((theme) => ({
  listItemIcon: {
    minWidth: theme.spacing(3),
  },
}));

function CountryList({ countries = [] }) {
  const classes = styles();
  return (
    <List component="nav" className={classes.root}>
      {countries.map((country, index) => (
        <ListItem button key={country.properties.name}>
          <ListItemIcon className={classes.listItemIcon}>
            {index + 1}
          </ListItemIcon>
          <ListItemText primary={country.properties.name} />
        </ListItem>
      ))}
    </List>
  );
}

export default CountryList;
