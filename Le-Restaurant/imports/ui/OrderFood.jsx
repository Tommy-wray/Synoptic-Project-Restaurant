import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useTracker } from "meteor/react-meteor-data";
import { foodItemsCollection } from "/imports/api/foodItemsCollection";

export default function CheckboxLabels(props) {
  const [state, setState] = useState([]);
  const [newOrder, setNewOrder] = useState([]);

  const handleChange = (event) => {
    let tempOrder = newOrder;
    tempOrder.includes(event.target.name,event.target.value);
    if (tempOrder.indexOf(event.target.name,event.target.value) === -1) {
      tempOrder.push(event.target.name,event.target.value);
    } else {
      const pos = tempOrder.indexOf(event.target.name,event.target.value);
      tempOrder.splice(pos, 1);
    }
    setNewOrder(tempOrder);
    setState({ ...state, [[event.target.name] [event.target.value] ]: event.target.checked });
    props.setOrder([...newOrder]);
  };
  const foodItems = useTracker(() => foodItemsCollection.find({}).fetch());
  const result = foodItems.map((foodItem) => {
    return (
        <div>
      <FormControlLabel
        control={<Checkbox onInput={handleChange} name={foodItem.name} value={foodItem.price}/>}
        label={`${foodItem.name}  £${foodItem.price}`}
  
      />      
    <select name="quantity" >
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>     
     <option value="5">5</option>
    </select>
    </div>
    ) 
  });

  return <FormGroup>{result}</FormGroup>;
}
