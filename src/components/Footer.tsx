import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <p>
          <span>Murillo</span> &copy; 2022
        </p>
      </footer>
    </div>
  );
};

export default Footer;
