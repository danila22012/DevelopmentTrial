import styles from './index.module.scss';
import GoogleIcon from '../../assets/google.svg';
import AppleIcon from '../../assets/apple.svg';
import EyeIcon from '../../assets/eye.svg';
import EyeCrossedIcon from '../../assets/eye-crossed.svg';
import { useState } from 'react';

interface PersonalInformationCollectionProps {
  onSubmit: (arg: any) => void;
}

export default function PersonalInformationCollection({
  onSubmit,
}: PersonalInformationCollectionProps) {
  const [formData, setFormData] = useState({
    firsName: {
      value: '',
    },
    lastName: {
      value: '',
    },
    creatorName: {
      value: '',
    },
    email: {
      value: '',
    },
    phoneNumber: {
      value: '',
    },
    password: {
      value: '',
      isShown: false,
    },
    confirmPassword: {
      value: '',
      isShown: false,
    },
    termsAndConditions: {
      value: false,
    },
  });

  const togglePassword = (field: 'password' | 'confirmPassword') => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: {
        value: prevState[field].value,
        isShown: !prevState[field].isShown,
      },
    }));
  };

  const hanleFieldChange = (
    field: keyof typeof formData,
    value: string | boolean
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: {
        value: value,
      },
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <h3 className={styles.title}>Account Details</h3>
          <h6 className={styles.subtitle}>Add your personal info</h6>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.btn}>
            <img src={GoogleIcon} alt='Google logo' /> Sign in with Google
          </button>
          <button className={styles.btn}>
            <img src={AppleIcon} alt='Apple logo' />
            Sign in with Apple
          </button>
        </div>
        <div className={styles.divider}>
          <div></div>
          Or with email
          <div></div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formFieldContainer}>
            <input
              value={formData.firsName.value}
              onChange={({ target }) => {
                hanleFieldChange('firsName', target.value);
              }}
              className={styles.formField}
              placeholder='First Name'
            />
            <input
              value={formData.lastName.value}
              onChange={({ target }) => {
                hanleFieldChange('lastName', target.value);
              }}
              className={styles.formField}
              placeholder='Last name'
            />
          </div>
          <div className={styles.formFieldContainer}>
            <input
              value={formData.creatorName.value}
              onChange={({ target }) => {
                hanleFieldChange('creatorName', target.value);
              }}
              className={styles.formField}
              placeholder='Creator Name'
            />
          </div>
          <div className={styles.formFieldContainer}>
            <input
              value={formData.email.value}
              onChange={({ target }) => {
                hanleFieldChange('email', target.value);
              }}
              className={styles.formField}
              placeholder='Email'
            />
          </div>
          <div className={styles.formFieldContainer}>
            <input
              value={formData.phoneNumber.value}
              onChange={({ target }) => {
                hanleFieldChange('phoneNumber', target.value);
              }}
              className={styles.formField}
              placeholder='Phone Number'
            />
          </div>
          <div className={styles.formFieldContainer}>
            <input
              value={formData.password.value}
              onChange={({ target }) => {
                hanleFieldChange('password', target.value);
              }}
              className={`${styles.formField}`}
              placeholder='Password'
              type={formData.password.isShown ? 'text' : 'password'}
            />
            <img
              className={styles.passwordFiledIcon}
              src={formData.password.isShown ? EyeCrossedIcon : EyeIcon}
              onClick={() => togglePassword('password')}
              alt='show pass'
            />
          </div>
          <div className={styles.formFieldContainer}>
            <input
              value={formData.confirmPassword.value}
              onChange={({ target }) => {
                hanleFieldChange('confirmPassword', target.value);
              }}
              className={styles.formField}
              placeholder='Confirm Password'
              type={formData.confirmPassword.isShown ? 'text' : 'password'}
            />
            <img
              className={styles.passwordFiledIcon}
              src={formData.confirmPassword.isShown ? EyeCrossedIcon : EyeIcon}
              onClick={() => togglePassword('confirmPassword')}
              alt='show pass'
            />
          </div>
          <div className={styles.formFieldContainer}>
            <label>
              <input
                checked={formData.termsAndConditions.value}
                onChange={({ target }) => {
                  hanleFieldChange('termsAndConditions', target.checked);
                }}
                type='checkbox'
              />{' '}
              I Accept the{' '}
              <a href='#' className='link-primary link-underline-opacity-0'>
                Terms
              </a>
            </label>
          </div>
          <button type='submit' className='btn btn-primary'>
            Continue
          </button>
          <h6 className={styles.subtitle}>
            Already have an Account?{' '}
            <a href='#' className='link-primary link-underline-opacity-0'>
              Sign in
            </a>
          </h6>
        </form>
      </div>
    </div>
  );
}
