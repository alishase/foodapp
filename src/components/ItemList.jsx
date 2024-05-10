import Item from "./Item";
import styles from "./ItemList.module.css";

export default function ItemList({ food, isLoading }) {
    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className={styles.itemList}>
                    {food.extendedIngredients.map((item, index) => (
                        <Item item={item} key={index} />
                    ))}
                </div>
            )}
        </>
    );
}
