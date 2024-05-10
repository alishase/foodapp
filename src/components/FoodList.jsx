import FoodItem from "./FoodItem";

export default function FoodList({ setFoodId, foodData }) {
    return (
        <div>
            {foodData.map((food) => (
                <FoodItem food={food} key={food.title} setFoodId={setFoodId} />
            ))}
        </div>
    );
}
