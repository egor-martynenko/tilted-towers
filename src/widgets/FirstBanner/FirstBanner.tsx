import styles from "./FirstBanner.module.scss";
export const FirstBanner = () => {
  return (
    <div className={styles.banner}>
    <div className={styles.gradient}>
      <h3 className={styles.title}>Fortnite Accounts</h3>
      <p className={styles.cta}>Buy High-Quality Fortnite Accounts!</p>
    </div>
    </div>
  );
};