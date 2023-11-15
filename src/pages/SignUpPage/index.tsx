import { useState } from 'react';
import SignUpStepIndicator from '../../components/SignUpStepIndicator';
import AccountTypeSelection from '../../components/AccountTypeSelection';
import PersonalInformationCollection from '../../components/PersonalInformationCollection';
import { useNavigate } from 'react-router-dom';

const SIGN_UP_STEPS = {
  ACCOUNT_TYPE_SELECTION: {
    step: 1,
    value: 'ACCOUNT_TYPE_SELECTION',
  },
  PERSONAL_INFORMATION_COLLECTION: {
    step: 2,
    value: 'PERSONAL_INFORMATION_COLLECTION',
  },
};

export default function SignUpPage() {
  const navigate = useNavigate();
  const [state, setState] = useState<{
    currentStep: {
      step: number;
      value: string;
    };
    accountType: string | null;
  }>({
    currentStep: SIGN_UP_STEPS.ACCOUNT_TYPE_SELECTION,
    accountType: null,
  });

  const collectAccountType = (accountType: string) => {
    setState({
      currentStep: SIGN_UP_STEPS.PERSONAL_INFORMATION_COLLECTION,
      accountType,
    });
  };

  const collectPersonalInformation = (data: any) => {
    console.log(data);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };

  return (
    <div className='d-flex h-100'>
      <div className='col-4'>
        <SignUpStepIndicator currentStep={state.currentStep.step} />
      </div>
      <div className='col-8'>
        {state.currentStep.value === 'ACCOUNT_TYPE_SELECTION' && (
          <AccountTypeSelection onSave={collectAccountType} />
        )}
        {state.currentStep.value === 'PERSONAL_INFORMATION_COLLECTION' && (
          <PersonalInformationCollection
            onSubmit={collectPersonalInformation}
          />
        )}
      </div>
    </div>
  );
}
