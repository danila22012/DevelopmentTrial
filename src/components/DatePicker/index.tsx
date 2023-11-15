import { DateRange, Range } from 'react-date-range';
import styles from './index.module.scss';
import { useEffect, useRef } from 'react';

interface DatePickerProps {
  value: Range[];
  isOpen: boolean;
  onChange: (arg: any) => void;
  onClose: () => void;
}

export default function DatePicker({
  value,
  isOpen,
  onChange,
  onClose,
}: DatePickerProps) {
  const backdrop = document.querySelector('#root');
  const ref = useRef();

  function closeDatePicker(e: any) {
    if (ref.current && !ref.current.contains(e.target)) {
      e.stopPropagation();
      e.preventDefault();
      onClose();
    }
  }

  useEffect(() => {
    if (isOpen) {
      backdrop?.addEventListener('click', closeDatePicker);
    }
    return () => {
      backdrop?.removeEventListener('click', closeDatePicker);
    };
  }, [isOpen]);

  return (
    <div className={styles.dateRange} ref={ref}>
      <DateRange
        showDateDisplay={false}
        onChange={(item) => {
          onChange([item.selection]);
        }}
        moveRangeOnFirstSelection={false}
        ranges={value}
        classNames={{
          calendarWrapper: styles.calendarWrapper,
          day: styles.day,
          dayPassive: styles.dayPassive,
          weekDays: styles.weekDays,
          inRange: styles.inRange,
          dayNumber: styles.dayNumber,
          startEdge: styles.startEdge,
          endEdge: styles.endEdge,
          // dayEndPreview: styles.dayNumber,
        }}
      />
    </div>
  );
}
