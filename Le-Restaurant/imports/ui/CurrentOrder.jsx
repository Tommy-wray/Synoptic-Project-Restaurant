import React, { useState } from "react";
import {ordersCollection} from "/imports/api/ordersCollection";
import OrderFood from "./OrderFood";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default () => {

  let [order, setOrder] = useState([]);

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);
 const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
    setOpenFail(false);
  };

  const submit = () => { 
   
    if (order.length ===0){
      setOpenFail(true)
    } else{
     
    ordersCollection.insert({  order });
    setOpenSuccess(true);
  }};

  return (
    <div>        
      <OrderFood setOrder={setOrder} />

  
        
        <br />
        <Button type="button" onClick={submit} variant="contained">
          Confirm and place order !
        </Button>
      

      <Snackbar open={openSuccess} autoHideDuration={5000} onClose={handleClose}>
        <Alert severity="success">Your order has been placed!</Alert>
      </Snackbar>
      <Snackbar open={openFail} autoHideDuration={5000} onClose={handleClose}>
        <Alert severity="error">Please ensure that all fields are populated</Alert>
      </Snackbar>
    </div>
  );
};
