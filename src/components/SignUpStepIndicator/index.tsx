import Logo from '../../assets/Logo.svg';

const signUpSteps = [
  {
    step: 1,
    title: 'Account type',
    description: 'Select your account type',
  },
  {
    step: 2,
    title: 'Account Details',
    description: 'Add your personal info',
  },
  {
    step: 3,
    title: 'Verification',
    description: 'Verify your account.',
  },
  {
    step: 4,
    title: 'Creator Info',
    description: 'Setup creator details',
  },
  {
    step: 5,
    title: 'Completed',
    description: 'Your account is created',
  },
];

interface SignUpStepIndicatorProps {
  currentStep: number;
}
export default function SignUpStepIndicator({
  currentStep,
}: SignUpStepIndicatorProps) {
  return (
    <div className='bg-primary text-white h-100'>
      <div className='d-flex flex-column h-100 align-items-center justify-content-center'>
        <div className='mb-5'>
          <img src={Logo} alt='Logo' />
        </div>
        <div>
          <div className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'>
            <div className='d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px'>
              <div className='stepper-nav ps-lg-10'>
                {signUpSteps.map(
                  ({ step, title, description }, index, array) => (
                    <div
                      key={step}
                      className={`stepper-item ${
                        step === currentStep ? 'current' : ''
                      }`}
                      data-kt-stepper-element='nav'>
                      <div className='stepper-wrapper'>
                        <div className='stepper-icon'>
                          <span className='stepper-number'>{step}</span>
                        </div>
                        <div className='stepper-label'>
                          <h3 className='stepper-title'>{title}</h3>
                          <div className='stepper-desc'>{description}</div>
                        </div>
                      </div>
                      {index < array.length - 1 && (
                        <div className='stepper-line'></div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className='d-flex justify-center'
          style={{ position: 'absolute', bottom: 20, gap: '38px' }}>
          <p>Terms</p>
          <p>Plans</p>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
}
