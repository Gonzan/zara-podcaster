import styles from './Card.module.css';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Card: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className={styles.card} data-testid="card">
      {children}
    </div>
  );
}

export default Card;
