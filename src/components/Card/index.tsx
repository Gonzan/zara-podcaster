import { ReactNode } from "react";
import styles from "./Card.module.css";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`${styles.card} ${className}`} data-testid="card">
      {children}
    </div>
  );
};

export default Card;
