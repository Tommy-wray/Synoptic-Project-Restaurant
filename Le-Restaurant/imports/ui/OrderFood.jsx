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
    tempOrder.includes(event.target.name, event.target.value);
    console.log(tempOrder.includes(event.target.name, 4));
    if (tempOrder.includes(event.target.name, 4)) {
      console.log("you cannot order any more of this food");
    } else {
      tempOrder.push(event.target.name);
      props.setTotalCost((props.totalCost += Number(event.target.value)));
    }

    setNewOrder(tempOrder);
    // setState({ ...state, [[event.target.name] [event.target.value] ]: event.target.checked });
    props.setOrder([...newOrder]);
  };
  const foodItems = useTracker(() => foodItemsCollection.find({}).fetch());
  const result = foodItems.map((foodItem) => {
    return (
      <div className="c-orderFood">
        <FormControlLabel
          control={
            <Checkbox
              onInput={handleChange}
              name={foodItem.name}
              value={foodItem.price}
            />
          }
          label={`${foodItem.name}  £${foodItem.price}`}
        />
      </div>
    );
  });

  return (
    <div>
      <h2>Click on a menu item to add to your order !</h2>
      <FormGroup>{result}</FormGroup>;
    </div>
  );
}
