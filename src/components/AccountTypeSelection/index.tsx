import { useState } from 'react';
import styles from './index.module.scss';
import ArrowRightIcon from '../../assets/arrow-right.svg';
import PersonSquareIcon from '../../assets/user-square.svg';
import BriefcaseIcon from '../../assets/briefcase.svg';

interface AccountTypeSelectionProps {
  onSave: (accountType: string) => void;
}

type AccountType = 'CREATOR' | 'AGENCY';

const accountTypes: {
  type: AccountType;
  icon: JSX.Element;
  title: string;
  description: string;
}[] = [
  {
    type: 'CREATOR',
    icon: <img src={PersonSquareIcon} className='me-3' />,
    title: 'Creator',
    description: 'Sign-up as a creator',
  },
  {
    type: 'AGENCY',
    icon: (
      <img
        src={BriefcaseIcon}
        className='me-3'
        style={{ fill: 'var(--bs-primary)' }}
      />
    ),
    title: 'Agency',
    description: 'Sign-up as an agency',
  },
];

export default function AccountTypeSelection({
  onSave,
}: AccountTypeSelectionProps) {
  const [accountType, setAccountType] = useState<AccountType>('CREATOR');

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h4>Choose an account type</h4>
        <h6 className={styles.subtitle}>
          If you need more info, please visit our{' '}
          <a href='#' className='link-primary link-underline-opacity-0'>
            help page.
          </a>
        </h6>
        <div className={styles.selection}>
          {accountTypes.map((account) => (
            <div
              key={account.type}
              onClick={() => {
                setAccountType(account.type);
              }}
              className={`${styles.selectionItem} ${
                account.type === accountType ? styles.selected : ''
              }`}>
              {account.icon}
              <div>
                <p>{account.title}</p>
                <p>{account.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => onSave(accountType)}
          className='btn btn-primary fw-semibold px-4 py-2 align-self-end'>
          Continue <img src={ArrowRightIcon} className='ms-2' />
        </button>
      </div>
    </div>
  );
}
