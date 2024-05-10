import FoodItem from "./FoodItem";
import styles from "./fooditem.module.css";

export default function FoodList({ setFoodId, foodData, setOpened, opened }) {
    return (
        <>
            {opened ? (
                <div className={styles.mobile}>
                    {foodData.map((food, index) => (
                        <FoodItem
                            food={food}
                            key={index}
                            setFoodId={setFoodId}
                            setOpened={setOpened}
                        />
                    ))}
                </div>
            ) : (
                ""
            )}
            <div className={styles.foodList}>
                {foodData.map((food) => (
                    <FoodItem
                        food={food}
                        key={food.title}
                        setFoodId={setFoodId}
                        setOpened={setOpened}
                    />
                ))}
            </div>
        </>
    );
}
