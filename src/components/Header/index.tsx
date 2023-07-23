import Logo from '../Logo';
import styles from './Header.module.css';
import Container from '../Container';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Logo />
      </Container>
    </header>
  );
}

export default Header;
