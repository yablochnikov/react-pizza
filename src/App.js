import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

import Skeleton from "./components/PizzaBlock/Skeleton";

import "./scss/app.scss";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("https://632a28f7713d41bc8e6b79e0.mockapi.io/Pizzas")
      .then((res) => res.json())
      .then((res) => setPizzas((pizzas) => res));
  }, []);
  console.log("render");
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
            {pizzas.length > 0
              ? pizzas.map((obj, i) => <PizzaBlock key={i} {...obj} />)
              : [...new Array(6)].map((el, i) => <Skeleton key={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
