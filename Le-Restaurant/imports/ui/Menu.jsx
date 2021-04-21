import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { foodItemsCollection } from "/imports/api/foodItemsCollection";
import { useTracker } from "meteor/react-meteor-data";

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function InteractiveList() {
  const classes = useStyles();
  const foodItems = useTracker(() => foodItemsCollection.find({}).fetch());
  const result = foodItems.map((foodItem) => {
    switch (foodItem.course) {
      case "Starter":
        return (
          <ListItem>
            <ListItemText primary={`${foodItem.name} £${foodItem.price}`} />
            
          </ListItem>
        );
      case "Main":
        return (
          <ListItem>
            <ListItemText primary={`${foodItem.name}  £${foodItem.price}`} />
          </ListItem>
        );
      case "Sides":
        return (
          <ListItem>
            <ListItemText primary={`${foodItem.name}  £${foodItem.price}`} />
          </ListItem>
        );
      case "Drinks":
        return (
          <ListItem>
            <ListItemText primary={`${foodItem.name}  £${foodItem.price}`} />
          </ListItem>
        );
    }
    console.log(foodItem);
  });
  return (
    <div className="c-menu-list">
      <h2>Check out our menu below</h2>
      <div className={classes.demo}>
        <List>{result}</List>
      </div>
    </div>
  );
}
