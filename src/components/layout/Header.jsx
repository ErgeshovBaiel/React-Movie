import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import User from '../../assets/user.svg';

const Header = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className='flex justify-center'>
      <div className='px-[50px] bg-transparent z-30 fixed text-white flex justify-between pt-[35px] w-[1300px] mx-auto'>
        <div className='flex items-center gap-[70px]'>
          <img src={Logo} alt='' />
          <div className='font-medium text-xl text-[#FFFFFF]'>
            <NavLink to={'/'}>{t('home')}</NavLink>
          </div>
        </div>

        <div className='flex items-center gap-[70px]'>
          <p
            className='font-medium text-[19px] cursor-pointer'
            onClick={changeLanguage}
          >
            {t('language')}
          </p>

          <p>
            <img src={User} alt='' />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
