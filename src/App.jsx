import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import FoodDetails from "./components/FoodDetails";

function App() {
    const [foodData, setFoodData] = useState([]);
    const [foodId, setFoodId] = useState("631814");
    const [opened, setOpened] = useState(true);
    return (
        <div className="project">
            <Nav opened={opened} setOpened={setOpened} />
            <Search
                foodData={foodData}
                setFoodData={setFoodData}
                setOpened={setOpened}
            />
            {/* {console.log(foodData)} */}
            <div className="container">
                <FoodList
                    setFoodId={setFoodId}
                    foodData={foodData}
                    opened={opened}
                    setOpened={setOpened}
                />
                <div className="details">
                    <FoodDetails foodId={foodId} />
                </div>
            </div>
        </div>
    );
}

export default App;
