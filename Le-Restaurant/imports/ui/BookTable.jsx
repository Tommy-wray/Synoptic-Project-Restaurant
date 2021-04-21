import React from "react";

export default () => {
  return (
    <div>
      <h1>Book table</h1>
      <form className="c-bookTable-form">
        <label> Pick a restaurant</label>
        <br />

        <select name="restaurant">
          <option value="Leeds">Leeds</option>
          <option value="London">London</option>
          <option value="Manchester">Manchester</option>
          <option value="Newcastle">Newcastle</option>
        </select>
        <br />
        <label>Pick a time</label>
        <br />

        <input type="time" name="time" required />
        <br />

        <label>Pick a date</label>
        <br />

        <input type="date" name="date" required min="2021-04-21" />
        <br />

        <button type="submit">Book Table</button>
      </form>
    </div>
  );
};