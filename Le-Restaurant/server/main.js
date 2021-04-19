import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { foodItemsCollection } from "/imports/api/foodItemsCollection";

const SEED_USERNAME = "tommy";
const SEED_PASSWORD = "password";

const insertFoodItem = ({ name, price, course }) =>
  foodItemsCollection.insert({ name, price, course });

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  if (foodItemsCollection.find().count() === 0) {
    [
      {
        course: "Starter",
        name: "Dough Balls",
        price: " £4.99 ",
        stock: 51,
      },
      {
        course: "Starter",
        name: "Garlic Pizza Bread ",
        price: " £4.59 ",
        stock: 50,
      },
      {
        course: "Starter",
        name: "Garlic Pizza Bread with Mozzarella",
        price: " £4.99 ",
        stock: 80,
      },
      {
        course: "Starter",
        name: "Garlic Bread with Vegan Mozzarella ",
        price: " £4.99 ",
        stock: 85,
      },
      {
        course: "Starter",
        name: "Meatballs",
        price: " £5.50 ",
        stock: 32,
      },
      {
        course: "Starter",
        name: "Mozzarella Sticks",
        price: " £3.99 ",
        stock: 150,
      },
      {
        course: "Starter",
        name: "Bacon & Cheese Potato Skins",
        price: " £5.50 ",
        stock: 55,
      },
      {
        course: "Starter",
        name: "Cheese & Chive Fully Loaded Potato Skins ",
        price: " £5.25 ",
        stock: 56,
      },
      {
        course: "Starter",
        name: "Mozzarella & Tomato Salad ",
        price: " £4.50 ",
        stock: 90,
      },
      {
        course: "Starter",
        name: "BBQ Chicken Wings ",
        price: " £5.50 ",
        stock: 50,
      },
      {
        course: "Starter",
        name: "Southern Fried Chicken wih BBQ Sauce ",
        price: " £5.50 ",
        stock: 103,
      },
      {
        course: "Starter",
        name: "Sticky Hot Chicken Wings ",
        price: " £5.50 ",
        stock: 109,
      },
      {
        course: "Starter",
        name: "Southern Fried Chicken with Hot Sauce ",
        price: " £5.50 ",
        stock: 98,
      },
      {
        course: "Main",
        name: "Classic Beef Burger ",
        price: " £9.99 ",
        stock: 45,
      },
      {
        course: "Main",
        name: "Double Bacon Cheese Burger ",
        price: " £10.99 ",
        stock: 45,
      },
      {
        course: "Main",
        name: "Classic Cheese Burger ",
        price: " £8.99 ",
        stock: 66,
      },
      {
        course: "Main",
        name: "Chicken BLT Burger ",
        price: " £9.99 ",
        stock: 45,
      },
      {
        course: "Main",
        name: "Vegan Burger ",
        price: " £8.99 ",
        stock: 35,
      },
      {
        course: "Main",
        name: "The House Special Burger ",
        price: " £11.50 ",
        stock: 69,
      },
      {
        course: "Main",
        name: "Classic Chicken Burger ",
        price: " £8.99 ",
        stock: 77,
      },
      {
        course: "Main",
        name: "Crispy BBQ Chicken Burger ",
        price: " £9.59 ",
        stock: 35,
      },
      {
        course: "Main",
        name: "Beef Lasagne ",
        price: " £10.50 ",
        stock: 15,
      },
      {
        course: "Main",
        name: "Meatballs with Spaghetti ",
        price: " £10.99 ",
        stock: 25,
      },
      {
        course: "Main",
        name: "Spaghetti Carbonara ",
        price: " £9.99 ",
        stock: 45,
      },
      {
        course: "Main",
        name: "Mac 'N' Cheese ",
        price: " £9.99 ",
        stock: 50,
      },
      {
        course: "Main",
        name: "Ultimate Mac 'N' Cheese with Bacon ",
        price: " £10.59 ",
        stock: 25,
      },
      {
        course: "Main",
        name: "Spaghetti Bolognese ",
        price: " £9.99 ",
        stock: 45,
      },
      {
        course: "Main",
        name: "Spaghetti Arrabbiata ",
        price: " £10.50 ",
        stock: 23,
      },
      {
        course: "Main",
        name: "Chicken & Prawn Alfredo with Spaghetti ",
        price: " £12.00 ",
        stock: 12,
      },
      {
        course: "Main",
        name: "10'' Pepperoni Pizza ",
        price: " £9.50 ",
        stock: 23,
      },
      {
        course: "Main",
        name: "10'' BBQ Chicken Pizza ",
        price: " £10.00 ",
        stock: 34,
      },
      {
        course: "Main",
        name: "10'' Hawaiian Pizza",
        price: " £9.50 ",
        stock: 32,
      },
      {
        course: "Main",
        name: "10'' Vegan Margherita Pizza ",
        price: " £7.99 ",
        stock: 22,
      },
      {
        course: "Main",
        name: "10'' Cajun Chicken Pizza ",
        price: " £8.99 ",
        stock: 31,
      },
      {
        course: "Main",
        name: "10'' Margherita Pizza ",
        price: " £7.99 ",
        stock: 45,
      },
      {
        course: "Main",
        name: "15'' Margherita Pizza ",
        price: " £12.00 ",
        stock: 54,
      },
      {
        course: "Main",
        name: "15'' Cajun Chicken Pizza ",
        price: " £13.50 ",
        stock: 12,
      },
      {
        course: "Main",
        name: "15'' Pepperoni Pizza ",
        price: " £13.50 ",
        stock: 12,
      },
      {
        course: "Main",
        name: "15'' BBQ Chicken Pizza ",
        price: " £13.50 ",
        stock: 32,
      },
      {
        course: "Main",
        name: "15'' Hawaiian Pizza ",
        price: " £12.50 ",
        stock: 45,
      },
      {
        course: "Main",
        name: "15'' Vegan Margherita Pizza ",
        price: " £11.50 ",
        stock: 66,
      },
      {
        course: "Sides",
        name: "Sweet Potato Fries ",
        price: " £2.99 ",
        stock: 34,
      },
      {
        course: "Sides",
        name: "Onion Rings ",
        price: " £3.50 ",
        stock: 23,
      },
      {
        course: "Sides",
        name: "Greens ",
        price: " £2.99 ",
        stock: 12,
      },
      {
        course: "Sides",
        name: "Fries ",
        price: " £2.59 ",
        stock: 110,
      },
      {
        course: "Sides",
        name: "Corn on the Cob ",
        price: " £2.50 ",
        stock: 45,
      },
      {
        course: "Sides",
        name: "Side Sald ",
        price: " £2.99 ",
        stock: 2,
      },
      {
        course: "Sides",
        name: "Coleslaw ",
        price: " £2.50 ",
        stock: 32,
      },
      {
        course: "Sides",
        name: "Beans",
        price: " £1.99 ",
        stock: 15,
      },
      {
        course: "Drinks",
        name: "Tea",
        price: " £1.50 ",
        stock: 99,
      },
      {
        course: "Drinks",
        name: "Coffee",
        price: " £1.65 ",
        stock: 205,
      },
      {
        course: "Drinks",
        name: "Coke",
        price: " £1.50 ",
        stock: 108,
      },
      {
        course: "Drinks",
        name: "Fanta",
        price: " £1.50 ",
        stock: 45,
      },
      {
        course: "Drinks",
        name: "Sprite",
        price: " £1.50 ",
        stock: 54,
      },
      {
        course: "Drinks",
        name: "Orange Juice",
        price: " £2.25 ",
        stock: 60,
      },
      {
        course: "Drinks",
        name: "Water",
        price: " £1.25 ",
        stock: 120,
      },
    ].map(insertFoodItem);
  }
});
