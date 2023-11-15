import { useEffect, useState } from 'react';
import Dropdown from '../Dropdown';
import TableStatisticItem from '../TableStatisticItem';
import styles from './index.module.scss';
import { Range } from 'react-date-range';
import DatePicker from '../DatePicker';

const dateFilteringOptions = [
  { id: 1, label: 'Today', value: 'Today' },
  { id: 2, label: 'Yesterday', value: 'Yesterday' },
  { id: 3, label: 'This Week', value: 'This Week' },
  { id: 4, label: 'This Month', value: 'This Month' },
  { id: 5, label: 'Select Date', value: 'Select Date' },
];

export default function TableStatistic() {
  const [filteringValue, setFilteringValue] = useState('');
  const [showDateRangePicker, setShowDateRangePicker] = useState(false);
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  useEffect(() => {
    if (filteringValue === 'Select Date') {
      setShowDateRangePicker(true);
      setFilteringValue('');
    }
  }, [filteringValue]);

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <span>Sort by</span>
        {showDateRangePicker && (
          <DatePicker
            value={dateRange}
            onChange={(value) => setDateRange(value)}
            onClose={() => setShowDateRangePicker(false)}
            isOpen={showDateRangePicker}
          />
        )}
        <Dropdown
          value={filteringValue}
          options={dateFilteringOptions}
          placeholder='Date'
          onChange={(value) => setFilteringValue(value)}
          theme={'white'}
        />
      </div>
      <div className={styles.statsContainer}>
        <TableStatisticItem type={'scrapped'} value='250' />
        <TableStatisticItem type={'checked'} value='251' />
        <TableStatisticItem type={'vioaltions'} value='252' />
        <TableStatisticItem type={'removed'} value='253' />
      </div>
    </div>
  );
}
