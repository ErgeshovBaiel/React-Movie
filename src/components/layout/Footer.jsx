import { useTranslation } from 'react-i18next';
import TelIcon from '../../assets/tel.svg';
import EmailIcon from '../../assets/email.svg';
import TelegramIcon from '../../assets/telegram.svg';
import Button from '../UI/Button/Button';

const icons = [TelIcon, EmailIcon, TelegramIcon];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-[#1a1a1a] mt-[150px]'>
      <div className='app-container py-[48px] text-white flex justify-between'>
        <div>
          <h4 className="w-[80px] h-[20px] font-[Montserrat] text-[18px] font-medium mb-5">Cinemax</h4>
          <div className="w-[200px] h-[20px] font-[Montserrat] text-[16px] font-normal">
            {[t("About Us"), t("Blog"), t("Vacancies"), t("Promotions")].map((item) => (
              <p className='mb-[20px]' key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h4 className="w-[80px] h-[20px] font-[Montserrat] text-[18px] font-medium mb-5">{t("Help")}</h4>
          <div className="w-[255px] h-[20px] font-[Montserrat] text-[16px] font-normal">
            {[t("FAQ"), t("Contacts")].map((item) => (
              <p className='mb-[20px]' key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className='w-[255px]'>
          <h4 className="w-[80px] h-[20px] font-[Montserrat] text-[18px] font-medium mb-5">{t("Support")}</h4>
          <p className="w-[300px] h-[56px] font-montserrat text-base font-normal">
            {t("We are always ready to help. Our operators are online 24/7")}
          </p>
          <div className='flex gap-[20px] mt-5'>
            {icons.map((icon, index) => (
              <div
                key={index}
                className='w-[26px] flex items-center justify-center h-[26px] bg-[#EF4234] rounded-full'
              >
                <img src={icon} alt='' />
              </div>
            ))}
          </div>
          <Button className={'py-[5px] px-[20px] font-[Montserrat] mt-6 font-medium'}>
            {t("Write in chat")}
          </Button>
        </div>
      </div>
      <div className="bg-[#131416] h-[40px]">
        <div className="my-container flex justify-between">
          <p className="text-[#FFFFFF] mt-[10px] font-[Montserrat] font-medium text-[15px]">
            © 2015-2024 Cinemax
          </p>
          <p className="text-[#FFFFFF] mt-[10px] font-[Montserrat] font-medium text-[15px]">
            {t("User Agreement")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;