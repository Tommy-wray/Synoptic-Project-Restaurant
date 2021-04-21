import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {ordersCollection} from "/imports/api/ordersCollection";
import { useTracker } from "meteor/react-meteor-data";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InteractiveList() {

  const classes = useStyles();
  const deleteOrder = (order_id) =>{
    ordersCollection.remove(order_id)  
  }

  const orders = useTracker(() => ordersCollection.find({}).fetch());
  const result = orders.map((order) => {
      return( <ListItem>
          <ListItemText primary={`Items ordered:  ${order.order} TotalCost: £${order.totalCost} `} secondary={`Username: ${Meteor.user().username}   `}/>
          <IconButton edge="end" aria-label="delete" onClick={()=>{deleteOrder(order._id)}}>
            <DeleteIcon />
          </IconButton>
        </ListItem>)
       
  });

  return (
    <div>
      <h2>Delete the completed orders</h2>
      <div className={classes.demo}>
        <List>{result}</List>
      </div>
    </div>
  );
}