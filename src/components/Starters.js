import React from "react";
import Card from "./Card";
import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";
import four from "./images/four.jpg";

import six from "./images/six.jpg";

function Starters() {
  return (
    <div>
      <Card image={one} label="Italiano pesto" />
      <Card image={two} label="Chicken Wings" />
      <Card image={three} label="Chicken Momo" />
      <Card image={four} label="Biriyani" />
      <Card image={six} label="Chowmein" />
    </div>
  );
}

export default Starters;
