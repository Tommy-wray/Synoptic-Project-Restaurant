import React from "react";

const images = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];
const res = images.map((image) => {
  return <img src={`/images/${image}.jpg`} className="c-images" />;
});
export default () => {
  return (
    <div className="c-home">
      <h1>Welcome to Le Restaurant</h1>
      {res}
    </div>
  );
};
