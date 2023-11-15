import styles from './index.module.scss';
import HeaderLogoIcon from '../../assets/header-logo.svg';
import SearchIcon from '../../assets/magnifier.svg';
import NotificationIcon from '../../assets/notification.svg';
import AvatarIcon from '../../assets/Avatar.svg';
import ArrowDownIcon from '../../assets/down.svg';
export default function Header() {
  return (
    <header className={styles.container}>
      <img className={styles.logo} src={HeaderLogoIcon} alt='Logo' />
      <div className={styles.statusBar}>
        <div className={styles.notification}>
          <img className={styles.logo} src={NotificationIcon} alt='Logo' />
          <div>4</div>
        </div>
        <img className={styles.logo} src={SearchIcon} alt='Logo' />
        <div className={styles.profileSelection}>
          <img className={styles.logo} src={AvatarIcon} alt='Logo' />
          <img className={styles.logo} src={ArrowDownIcon} alt='Logo' />
        </div>
      </div>
    </header>
  );
}
