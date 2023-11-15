import { Outlet } from 'react-router-dom';
import Header from '../../layout/Header';
import SideBar from '../../layout/SideBar';

import styles from './index.module.scss';

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <SideBar />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
