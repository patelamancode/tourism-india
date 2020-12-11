import React from "react";
import "./styles.css";
import { useState } from "react";

var east = [
  "West Bengal::darjeeling",
  "Odisha::Chilika Lake",
  "Manipur::Kangla Fort",
  "Mizoram::Murlen National Park"
];

var west = [
  "Udaipur::City Of Lakes",
  "Jaipur::Pink City",
  "Jaiselmer::Dessert Safari"
];

var north = [
  "Dharamshala::Camping",
  "Mussoorie::Kempty Fall",
  "Ranikhet::Chaubatia Orchard"
];

var south = ["Kochi::Fort", "Goa::Beaches", "Kanyakumari::Sunrise"];

export default function App() {
  var [eastoptions, seteastoptions] = useState("");
  var [westoptions, setwestoptions] = useState("");
  var [northoptions, setnorthoptions] = useState("");
  var [southoptions, setsouthoptions] = useState("");

  var updateOption = (optionClick, placeOption) => {
    var result = placeOption.map((item, index) => {
      return (
        <p className="placeitem" key={index}>
          {item}
        </p>
      );
    });

    if (optionClick === "East") {
      seteastoptions(result);
      setwestoptions("");
      setnorthoptions("");
      setsouthoptions("");
    } else if (optionClick === "West") {
      seteastoptions("");
      setwestoptions(result);
      setnorthoptions("");
      setsouthoptions("");
    } else if (optionClick === "North") {
      seteastoptions("");
      setwestoptions("");
      setnorthoptions(result);
      setsouthoptions("");
    } else if (optionClick === "South") {
      seteastoptions("");
      setwestoptions("");
      setnorthoptions("");
      setsouthoptions(result);
    }
  };

  return (
    <div className="App">
      <h1>✈ Tourism ✈</h1>
      <hr />
      <h2>Visit India and select a genre and explore it.</h2>

      <div id="btnContainer">
        <button onClick={() => updateOption("East", east)}>East</button>
        <button onClick={() => updateOption("West", west)}>West</button>
        <button onClick={() => updateOption("North", north)}>North</button>
        <button onClick={() => updateOption("South", south)}>South</button>
      </div>

      <div id="outputContainer">
        {eastoptions ? eastoptions : null}
        {westoptions ? westoptions : null}
        {northoptions ? northoptions : null}
        {southoptions ? southoptions : null}
      </div>
    </div>
  );
}
