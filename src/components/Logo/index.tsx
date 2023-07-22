import Link from "next/link";
import styles from './Logo.module.css';

const Logo: React.FC = () => {
  return (
    <Link href="/">
        <h1 className={styles.logo__title}>Podcaster</h1>
    </Link>
  );
}

export default Logo;
