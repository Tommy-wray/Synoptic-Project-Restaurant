import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ordersCollection } from "/imports/api/ordersCollection";
import { useTracker } from "meteor/react-meteor-data";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

export default function InteractiveList() {
  const deleteOrder = (order_id) => {
    ordersCollection.remove(order_id);
  };

  const orders = useTracker(() => ordersCollection.find({}).fetch());
  const result = orders.map((order) => {
    if (order.userId === Meteor.userId()) {
      return (
        <ListItem>
          <ListItemText
            primary={`Items ordered:  ${order.order} TotalCost: £${order.totalCost} `}
            secondary={`Username: ${Meteor.user().username}   Order ID:${
              order._id
            }`}
          />
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              deleteOrder(order._id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      );
    }
  });

  return (
    <div>
      <h2> Outstanding orders </h2>
      <List>{result}</List>
    </div>
  );
}
