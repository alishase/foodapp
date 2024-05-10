import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId, setOpened }) {
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
                    setOpened(false);
                    setFoodId(food.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={styles.itemBtn}
            >
                View recipe
            </button>
        </div>
    );
}
