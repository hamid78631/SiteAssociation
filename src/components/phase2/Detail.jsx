import '../../styles/Detail.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Detail() {
  const { t } = useTranslation();

  return (
    <div className="paragraphe">
      <h2 className="text-cyan-300 text-3xl sticky font-bold">{t('detail.title1')}</h2><br />
      <h2 className="text-2xl sticky font-bold">{t('detail.title2')}</h2>
      <br />
      <p className='duration-500'>{t('detail.paragraph1')}</p>
      <p className='duration-500'>{t('detail.paragraph2')}</p><br /><br />
      <Link
        to="/about"
        onClick={() => window.scrollTo(0, 0)}
        className="bg-cyan-300 text-white p-3 pl-10 pr-10 rounded-2xl hover:bg-blue-600 duration-500 mt-[50px]"
      >
        {t('detail.button')}
      </Link>
    </div>
  );
}

export default Detail;




