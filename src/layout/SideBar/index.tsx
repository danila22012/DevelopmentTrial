import styles from './index.module.scss';
import HomeIcon from '../../assets/home.svg';
import ScrollIcon from '../../assets/scroll.svg';
import AddFilesIcon from '../../assets/add-files.svg';
import QuestionnaireTabletIcon from '../../assets/questionnaire-tablet.svg';
import GraphUpIcon from '../../assets/graph-up.svg';
import SettingsIcon from '../../assets/setting-2.svg';
import MessageQuestionIcon from '../../assets/message-question.svg';
import RescueIcon from '../../assets/rescue.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const sideBarItems = [
  {
    icon: <img src={HomeIcon} alt='Home icon' />,
    title: 'Home',
    to: '/',
  },
  {
    icon: <img src={AddFilesIcon} alt='AddFiles Icon' />,
    title: 'Submit Violations',
    to: '/violations',
  },
  {
    icon: <img src={ScrollIcon} alt='Scroll Icon' />,
    title: 'Whitelist',
    to: '/whitelist',
  },
  {
    icon: <img src={QuestionnaireTabletIcon} alt='QuestionnaireTablet Icon' />,
    title: 'Billing',
    to: '/billing',
  },
  {
    icon: <img src={GraphUpIcon} alt='GraphUp Icon' />,
    title: 'Affiliate Program',
    to: '/affiliate',
  },
  {
    icon: <img src={SettingsIcon} alt='Settings Icon' />,
    title: 'Settings',
    to: '/settings',
  },
  {
    icon: <img src={MessageQuestionIcon} alt='MessageQuestion Icon' />,
    title: 'FAQ',
    to: '/faq',
  },
  {
    icon: <img src={RescueIcon} alt='Rescue Icon' />,
    title: 'Support',
    to: '/support',
  },
];

export default function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (to: string) => {
    if (to === '/') {
      navigate(to);
    }
  };

  return (
    <nav className={styles.container}>
      {sideBarItems.map((item) => (
        <div
          key={item.title}
          onClick={() => handleClick(item.to)}
          className={`${styles.sideBarItem} ${
            location.pathname === item.to ? styles.selected : ''
          }`}>
          {item.icon}
          <p>{item.title}</p>
        </div>
      ))}
    </nav>
  );
}
