import styles from "./Description.module.css";

type DescriptionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
};

const Description: React.FC<DescriptionProps> = ({
  title,
  subtitle,
  description,
}) => (
  <div>
    {title && (
      <h3 className={styles.title}>
        {title}
      </h3>
    )}
    {subtitle && (
      <h4 className={styles.subtitle}>
        {subtitle}
      </h4>
    )}
    {description && (
      <p className={styles.description}>
        {description}
      </p>
    )}
  </div>
);

export default Description;
