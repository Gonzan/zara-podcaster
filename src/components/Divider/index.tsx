import styles from "./Divider.module.css";

const Divider: React.FC = () => (
  <hr className={styles.divider} data-testid="divider" />
);

export default Divider;