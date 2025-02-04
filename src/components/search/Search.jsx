import Input from '../UI/Input/Input'
import { useTranslation } from 'react-i18next'
import { CiSearch } from 'react-icons/ci'

const Search = () => {
  const { t, i18n } = useTranslation()
  return (
    <div className='bg-[#131416] text-white pt-[50px] pb-[150px]'>
      <div className='app-container'>
        <h3 className='text-[24px] mb-[15px] font-[Montserrat] font-medium'>
        {t('website')}
        </h3>
        <p className='w-[385px] mb-[60px] text-[#979797] font-[Montserrat]  text-[16px]'>
        {t('website-P')}
        </p>
        <div className='flex items-center rounded-[10px] pr-[20px] bg-[#1A1A1A]'>
          <Input hintText={t('search')} />
          <CiSearch color='#EF4234' className='text-[26px]' />
        </div>
      </div>
    </div>
  )
}

export default Search
