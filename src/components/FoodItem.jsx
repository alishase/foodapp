import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
    return (
        <div className={styles.itemContainer}>
            <img
                src={food.image}
                alt={food.title}
                className={styles.itemImage}
            />
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>
            </div>
            <button
                onClick={() => {
                    console.log(food.id);
                    setFoodId(food.id);
                }}
                className={styles.itemBtn}
            >
                View recipe
            </button>
        </div>
    );
}
