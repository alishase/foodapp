import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "bd2d27e28e324ac48581ac778e556424";
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
            setIsLoading(false);
        }
        fetchFood();
    }, [foodId]);
    return (
        <div>
            <div className={styles.detailsContainer}>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img src={food.image} alt="" className={styles.recipeImg} />
                <div className={styles.recipeDetails}>
                    <span>
                        <strong>⏱️ {food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        👨‍👩‍👧‍👦<strong> Serves {food.servings}</strong>
                    </span>
                    <span>
                        <strong>
                            {food.vegetarian
                                ? "🥕 Vegetarian"
                                : "🥩 Non-vegetarian"}
                        </strong>
                    </span>
                    <span>
                        <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
                    </span>
                </div>
                <div className={styles.price}>
                    <strong>
                        $ <span>{food.pricePerServing / 100} Per Serving</span>
                    </strong>
                </div>
                <h2>Ingredients</h2>
                <div className={styles.ingr}>
                    <ItemList food={food} isLoading={isLoading} />
                </div>
                <h2>Instructions</h2>
                <div className={styles.recipeInstr}>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <ol>
                            {food.analyzedInstructions[0].steps.map((step) => (
                                <li key={step.number}>{step.step}</li>
                            ))}
                        </ol>
                    )}
                </div>
            </div>
        </div>
    );
}
