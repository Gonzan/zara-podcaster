import styles from "./Badge.module.css";

type BadgeTypes = "primary";

type BadgeProps = {
  count: number;
  type?: BadgeTypes;
};

const Badge: React.FC<BadgeProps> = ({ type = "primary", count }) => (
  <mark
  className={`${styles.badge} ${styles['badge--primary']}`}
    data-testid="badge"
  >
    {count}
  </mark>
);

export default Badge;
