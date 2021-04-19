import { Mongo } from "meteor/mongo";

export const foodItemsCollection = new Mongo.Collection("foodItems");
