import { useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import ArrowDownIcon from '../../assets/down.svg';
import styles from './index.module.scss';
import ProfileIcon from '../../assets/users.svg';
import ExportIcon from '../../assets/arrows.svg';
import generatePageNumbers, { downloadCSV } from '../../utils';
import Dropdown from '../Dropdown';
import { PaginationComponent } from 'react-data-table-component/dist/src/DataTable/types';
import ArrowRightIcon from '../../assets/arrow-right-gray.svg';
import { Range } from 'react-date-range';
import DatePicker from '../DatePicker';

const Filter = ({
  filterText,
  onFilter,
}: {
  filterText: string;
  onFilter: (arg: any) => void;
}) => (
  <div className={styles.searchContainer}>
    <img src={ProfileIcon} alt='profile icon' />
    <input
      id='search'
      type='text'
      placeholder='Search'
      aria-label='Search Input'
      value={filterText}
      onChange={onFilter}
    />
  </div>
);

const Export = ({ onExport }: { onExport: (arg: any) => void }) => (
  <button onClick={onExport} className={styles.exportBtn}>
    <img src={ExportIcon} alt='Export icon' /> Export
  </button>
);

const dateFilteringOptions = [
  { id: 1, label: 'Today', value: 'Today' },
  { id: 2, label: 'Yesterday', value: 'Yesterday' },
  { id: 3, label: 'This Week', value: 'This Week' },
  { id: 4, label: 'This Month', value: 'This Month' },
  { id: 5, label: 'Select Date', value: 'Select Date' },
];
const statusFilteringOptions = [
  { id: 1, label: 'Removed', value: 'Removed' },
  { id: 2, label: 'Delisted', value: 'Delisted' },
];

const CustomPagination: PaginationComponent = ({
  currentPage,
  onChangePage,
  rowCount,
  rowsPerPage,
}) => {
  const maxNumberofPageButtons = 5;
  const pageNumbers = generatePageNumbers(
    rowCount,
    rowsPerPage,
    maxNumberofPageButtons,
    currentPage
  );
  const isNextButtonDisabled =
    currentPage + 1 > pageNumbers[pageNumbers.length - 1];
  const isPreviousButtonDisabled = currentPage - 1 < pageNumbers[0];

  return (
    <div className={styles.paginationContainer}>
      <p className={styles.paginationTotal}>Total results: {rowCount}</p>
      <div className={styles.paginationConntrols}>
        <button
          className={isPreviousButtonDisabled ? styles.disabled : ''}
          onClick={() =>
            !isPreviousButtonDisabled && onChangePage(currentPage - 1, rowCount)
          }>
          <img src={ArrowRightIcon} alt='ArrowRightIcon' />
        </button>
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={
              page === currentPage ? styles.paginationSelectedPage : ''
            }
            onClick={() => onChangePage(page, rowCount)}>
            {page}
          </button>
        ))}
        <button
          className={isNextButtonDisabled ? styles.disabled : ''}
          onClick={() =>
            !isNextButtonDisabled && onChangePage(currentPage + 1, rowCount)
          }>
          <img src={ArrowRightIcon} alt='ArrowRightIcon' />
        </button>
      </div>
    </div>
  );
};
interface TableProps {
  columns: any[];
  data: any[];
}
export default function Table({ columns, data }: TableProps) {
  const [filterText, setFilterText] = useState('');
  const [filteredDate, setFilteredDate] = useState('');
  const [showDateRangePicker, setShowDateRangePicker] = useState(false);
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [filteredStatus, setFilteredStatus] = useState('');
  const filteredProducts = data.filter(
    (item) => item.id && item.id.toString().includes(filterText.toLowerCase())
  );

  useEffect(() => {
    if (filteredDate === 'Select Date') {
      setShowDateRangePicker(true);
      setFilteredDate('');
    }
  }, [filteredDate]);

  const SubHeaderComponentMemo = useMemo(() => {
    return (
      <div className={styles.subHeaderContainer}>
        <Filter
          onFilter={(e) => setFilterText(e.target.value)}
          filterText={filterText}
        />
        <div>
          <Export onExport={() => downloadCSV(filteredProducts)} />
          <Dropdown
            value={filteredDate}
            options={dateFilteringOptions}
            onChange={(value) => setFilteredDate(value)}
            placeholder={'Date'}
          />
          <Dropdown
            value={filteredStatus}
            options={statusFilteringOptions}
            onChange={(value) => setFilteredStatus(value)}
            placeholder={'Status'}
          />
        </div>
      </div>
    );
  }, [filterText, filteredDate, filteredStatus]);

  return (
    <div className={styles.container}>
      {showDateRangePicker && (
        <DatePicker
          value={dateRange}
          onChange={(value) => setDateRange(value)}
          onClose={() => setShowDateRangePicker(false)}
          isOpen={showDateRangePicker}
        />
      )}
      <DataTable
        columns={columns}
        data={filteredProducts}
        defaultSortFieldId={1}
        sortIcon={<img src={ArrowDownIcon} />}
        pagination
        selectableRows
        subHeader
        subHeaderComponent={SubHeaderComponentMemo}
        paginationPerPage={5}
        paginationComponent={CustomPagination}
        customStyles={{
          headRow: {
            style: {
              borderBottom: '1px dashed var(--bs-gray-300)',
              color: 'var(--bs-gray-500)',
            },
          },
          rows: {
            style: { height: '90px' },
          },
          responsiveWrapper: {
            style: {
              borderRadius: 0,
            },
          },
          table: {
            style: {
              padding: '0 30px',
            },
          },
          pagination: {
            style: {
              border: 'none',
              padding: '0 30px',
            },
          },
          subHeader: {
            style: {
              justifyContent: 'flex-start',
              padding: '30px',
            },
          },
        }}
      />
    </div>
  );
}
