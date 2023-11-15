import styles from './index.module.scss';
import DisconnectIcon from '../../assets/disconnect.svg';
import MagnifierIcon from '../../assets/magnifier.svg';
import TrushIcon from '../../assets/trush.svg';
import InformationIcon from '../../assets/information-3.svg';

interface TableStatisticItemProps {
  type: 'scrapped' | 'checked' | 'vioaltions' | 'removed';
  value: string
}

const tableStatsConfiguration = {
  scrapped: {
    icon: DisconnectIcon,
    subtitle: "Links Scraped",
    container: { borderBottom: '3px solid var(--bs-primary)' },
    image: { background: '#EEF6FF' },
  },
  checked: {
    icon: MagnifierIcon,
    subtitle: "Links Manually Checked",
    container: { borderBottom: '3px solid var(--bs-indigo)' },
    image: { background: '#F8F5FF' },
  },
  vioaltions: {
    icon: InformationIcon,
    subtitle: "Link Violations",
    container: { borderBottom: '3px solid var(--bs-yellow)' },
    image: { background: '#FEF9E5' },
  },
  removed: {
    icon: TrushIcon,
    subtitle: "Links Removed",
    container: { borderBottom: '3px solid var(--bs-pink)' },
    image: { background: '#FEECF0' },
  },
};

export default function TableStatisticItem({ type, value }: TableStatisticItemProps) {
  return (
    <div
      className={`${styles.container}`}
      style={tableStatsConfiguration[type].container}>
      <div>
        <p className={styles.title}>{value}</p>
        <p className={styles.subtitle}>{tableStatsConfiguration[type].subtitle}</p>
      </div>
      <div
        className={`${styles.statImg} ${styles[type]}`}
        style={tableStatsConfiguration[type].image}>
        <img src={tableStatsConfiguration[type].icon} alt='Link icon' />
      </div>
    </div>
  );
}
