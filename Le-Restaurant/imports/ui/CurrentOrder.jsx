import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { ordersCollection } from "/imports/api/ordersCollection";
import OrderFood from "./OrderFood";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import PlacedOrders from "./PlacedOrders";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default () => { 
  const [order, setOrder] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
    setOpenFail(false);
  };

  const submit = () => {
    if (order.length === 0) {
      setOpenFail(true);
    } else {
      ordersCollection.insert({
        userId: Meteor.userId(),
        order,
        totalCost: Number.parseFloat(totalCost).toFixed(2),
      });
      setOpenSuccess(true);
    }
  };

  return (
    <div className="c-currentOrder">
        <OrderFood
          setOrder={setOrder}
          setTotalCost={setTotalCost}
          totalCost={totalCost}
        />
      <div className="c-running-total">
        {order.map((item) => {
          return <p>{item}</p>;
        })}

        £{Number.parseFloat(totalCost).toFixed(2)}
        <br />
        <div className="c-confirmOrderButton">
        <Button type="button" onClick={submit} variant="contained">
          Confirm and place order !
        </Button>
        </div>
        </div>
      

      <div className="c-placedOrders">
        <PlacedOrders/>
      </div>
      <Snackbar
        open={openSuccess}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert severity="success">Your order has been placed!</Alert>
      </Snackbar>
      <Snackbar open={openFail} autoHideDuration={5000} onClose={handleClose}>
        <Alert severity="error">
          Please ensure that you have selected some food !
        </Alert>
      </Snackbar>
    </div>
  );
};
