import Table from '../../components/Table';
import TableStatistic from '../../components/TableStatistic';
import styles from './index.module.scss';
const columns = [
  {
    id: 1,
    name: 'ID',
    selector: (row) => row.id,
    cell: (row) => <span className='fw-bold'>{row.id}</span>,
    left: true,
  },
  {
    id: 2,
    name: 'DATE REMOVED',
    selector: (row) => row.dateRemoved,
    cell: (row) => <span className='text-secondary'>{row.dateRemoved}</span>,
    left: true,
  },
  {
    id: 3,
    name: 'LINK',
    selector: (row) => row.link,
    cell: (row) => <span className='text-primary'>{row.link}</span>,
    left: true,
  },
  {
    id: 4,
    name: 'SOURCE',
    selector: (row) => row.source,
    cell: (row) => <span className='text-secondary'>{row.source}</span>,
    center: true,
  },
  {
    id: 5,
    name: 'Action',
    selector: (row) => row.action,
    cell: (row) =>
      row.action === 'Delisted' ? (
        <span className={styles.badgeDanger}>{row.action}</span>
      ) : (
        <span className={styles.badgeSuccess}>{row.action}</span>
      ),
    right: true,
  },
];

const products = [
  {
    id: 1,
    dateRemoved: '23 Sep 2023',
    link: 'https://google.com',
    source: 'Google',
    action: 'Removed',
  },
  {
    id: 2,
    dateRemoved: '23 Sep 2023',
    link: 'https://google.com',
    source: 'Google',
    action: 'Delisted',
  },
  {
    id: 3,
    dateRemoved: '23 Sep 2023',
    link: 'https://google.com',
    source: 'Google',
    action: 'Removed',
  },
  {
    id: 4,
    dateRemoved: '23 Sep 2023',
    link: 'https://google.com',
    source: 'Google',
    action: 'Removed',
  },
  {
    id: 5,
    dateRemoved: '23 Sep 2023',
    link: 'https://google.com',
    source: 'Google',
    action: 'Removed',
  },
  {
    id: 6,
    dateRemoved: '23 Sep 2023',
    link: 'https://google.com',
    source: 'Google',
    action: 'Removed',
  },
  {
    id: 7,
    dateRemoved: '23 Sep 2023',
    link: 'https://google.com',
    source: 'Google',
    action: 'Removed',
  },
  {
    id: 8,
    dateRemoved: '23 Sep 2023',
    link: 'https://google.com',
    source: 'Google',
    action: 'Removed',
  },
  {
    id: 9,
    dateRemoved: '23 Sep 2023',
    link: 'https://google.com',
    source: 'Google',
    action: 'Removed',
  },
  {
    id: 10,
    dateRemoved: '23 Sep 2023',
    link: 'https://google.com',
    source: 'Google',
    action: 'Removed',
  },
];

export default function HomePage() {
  return (
    <div className={styles.container}>
      <TableStatistic />
      <Table columns={columns} data={products} />
    </div>
  );
}
