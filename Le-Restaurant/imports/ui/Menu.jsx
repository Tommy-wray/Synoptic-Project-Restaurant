import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { foodItemsCollection } from "/imports/api/foodItemsCollection";
import { useTracker } from "meteor/react-meteor-data";

export default () => {
  const foodItems = useTracker(() => foodItemsCollection.find({}).fetch());
  const result = foodItems.map((foodItem) => {
    return (
      <ListItem>
        <ListItemText
          primary={`${foodItem.name} £${foodItem.price}`}
          secondary={foodItem.course}
        />
      </ListItem>
    );
  });
  return (
    <div>
      <h1>Check out our menu below</h1>
      <div className="c-menu-list">
        <List>{result}</List>
      </div>
    </div>
  );
};
