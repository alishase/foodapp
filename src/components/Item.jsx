import styles from "./Item.module.css";

export default function Item({ item }) {
    return (
        <div className={styles.itemContainer}>
            <img
                src={
                    `https://spoonacular.com/cdn/ingredients_100x100/` +
                    item.image
                }
                alt=""
            />
            <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <h3>
                    {item.amount} {item.unit}
                </h3>
            </div>
        </div>
    );
}
