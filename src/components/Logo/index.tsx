import Link from "next/link";
import styles from './Logo.module.css';
import Container from "../Container";

const Logo: React.FC = () => {
    return (
        <Container>
            <div>
                <Link href="/">
                    <h1 className={styles.logo__title}>Podcaster</h1>
                </Link>
            </div>
        </Container>
       
    );
}

export default Logo;
