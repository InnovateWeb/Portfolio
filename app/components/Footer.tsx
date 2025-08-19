import styles from "../styles/footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>Une réalisation signée Maxime Séchaud © {currentYear}</p>
        </footer>
    );
}
