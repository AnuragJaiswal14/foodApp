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
      <Card image={one} title="Italiano pesto" />
      <Card image={two} title="Chicken Wings" />
      <Card image={three} title="Chicken Momo" />
      <Card image={four} title="Biriyani" />
      <Card image={six} title="Chowmein" />
    </div>
  );
}

export default Starters;
