import styles from './AdminTabs.module.scss';
export const AdminTabs = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.tabs_list}>
        <li className={styles.tabs_listItem}>Users</li>
        <li className={styles.tabs_listItem}>Accounts</li>
      </ul>
    </div>
  );
};
