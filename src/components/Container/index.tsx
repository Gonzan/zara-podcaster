import styles from './Container.module.css';
import { ReactNode } from 'react';
interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className={styles.container} data-testid="container">
      {children}
    </div>
  );
}

export default Container;