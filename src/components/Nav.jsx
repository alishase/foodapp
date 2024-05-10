import styles from "./Nav.module.css";

export default function Nav({ opened, setOpened }) {
    return (
        <div className={styles.nav}>
            {opened ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="closeNav"
                    onClick={() => setOpened(false)}
                >
                    <rect
                        width="1"
                        height="1"
                        transform="matrix(1 0 0 -1 11 12)"
                        fill="#000000"
                    />
                    <rect
                        x="3"
                        y="19.9706"
                        width="24"
                        height="2"
                        transform="rotate(-45 3 19.9706)"
                        fill="#000000"
                    />
                    <rect
                        x="4"
                        y="3"
                        width="24"
                        height="2"
                        transform="rotate(45 4 3)"
                        fill="#000000"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="showNav"
                    onClick={() => setOpened(true)}
                >
                    <rect y="5" width="24" height="3" fill="#000000" />
                    <rect x="9" y="12" width="15" height="3" fill="#000000" />
                </svg>
            )}
            <span>🍔 FoodApp</span>
        </div>
    );
}
