import React from "react";
import Carousel from "./Components/Carousel"; // Adjust the import path
import MainPageFooter from "./Components/Footer"
import Card from "./Components/Cards"
import { cardsData } from "./Components/Cards";
import NavigationBar from "./Components/NavBar";
import "./index.css"

const App = () => {
  return (
    <div>
      <NavigationBar />
      <div id = "Events">
      <Carousel />
      </div>
      <div id = "Members">
      <h2> Members </h2>
      <div class = "cards">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
      </div>
      </div>
      <div id = "Footer">
      <MainPageFooter />
      </div>
    </div>
  );
};

export default App;

