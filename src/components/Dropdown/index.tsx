import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import ArrowDownIcon from '../../assets/down.svg';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

interface DropdownProps {
  options: {
    id: number;
    label: string;
    value: string;
  }[];
  onChange: (arg: any) => void;
  value: string;
  placeholder: string;
  theme?: 'gray' | 'white';
}

export default function Dropdown({
  options,
  onChange,
  value,
  placeholder,
  theme = 'gray',
}: DropdownProps) {
  const [isShown, setIsShown] = useState(false);
  const [currentValue, setCurrentValue] = useState(value || placeholder);
  const backdrop = document.querySelector('#root');

  function closeDropdown(e: any) {
    e.stopPropagation();
    e.preventDefault();
    setIsShown(false);
  }

  useEffect(() => {
    if (value) {
      setCurrentValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (isShown) {
      backdrop?.addEventListener('click', closeDropdown);
    }
    return () => {
      backdrop?.removeEventListener('click', closeDropdown);
    };
  }, [isShown]);
  return (
    <div className={styles.container}>
      <button
        className={`${styles.toggleBtn} ${styles[theme]}`}
        onClick={() => setIsShown((prevState) => !prevState)}
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='true'>
        {currentValue}
        <img src={ArrowDownIcon} alt='Arrow icon' />
      </button>
      <ul className={`${styles.options} ${isShown ? styles.show : ''} `}>
        {options.map((option) => (
          <li
            key={option.id}
            className={`${value === option.value ? styles.selected : ''}`}
            onClick={() => onChange(option.value)}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
