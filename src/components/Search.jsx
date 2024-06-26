import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "2c718436419c4226b980ce1832877b09";

export default function Search({ foodData, setFoodData, setOpened }) {
    const [query, setQuery] = useState("burger");
    const [search, setSearch] = useState(0);

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            setFoodData(data.results);
        }
        fetchFood();
    }, [search]);
    return (
        <div className={styles.searchContainer}>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className={styles.input}
            />
            <button
                onClick={() => {
                    setSearch(search + 1);
                    setOpened(true);
                }}
                className={styles.btn}
            >
                Search
            </button>
        </div>
    );
}
