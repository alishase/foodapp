import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import FoodDetails from "./components/FoodDetails";

function App() {
    const [foodData, setFoodData] = useState([]);
    const [foodId, setFoodId] = useState("631814");

    return (
        <>
            <Nav />
            <Search foodData={foodData} setFoodData={setFoodData} />
            {/* {console.log(foodData)} */}
            <div className="container">
                <FoodList setFoodId={setFoodId} foodData={foodData} />
                <div className="details">
                    <FoodDetails foodId={foodId} />
                </div>
            </div>
        </>
    );
}

export default App;
