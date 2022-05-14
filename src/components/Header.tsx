import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1>React + TS Todo</h1>
      </header>
    </div>
  );
};

export default Header;
