import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import imgHero from '../../assets/images/img_hero/Ic_ilustra_Hero.png';
import imgHero2 from '../../assets/images/img_hero/Ic_ilustra_Hero@2x.png';
import imgHero3 from '../../assets/images/img_hero/Ic_ilustra_Hero@3x.png';
import woloxer from '../../assets/images/woloxer/img_woloxer.png';
import woloxer2 from '../../assets/images/woloxer/img_woloxer@2x.png';
import woloxer3 from '../../assets/images/woloxer/img_woloxer@3x.png';
import hour from '../../assets/images/benefits/Ic_Hour.svg';
import homeOffice from '../../assets/images/benefits/Ic_HomeOffice.svg';
import workShop from '../../assets/images/benefits/Ic_Workshops.svg';
import snacks from '../../assets/images/benefits/Ic_DrinkSnacks.svg';
import laptop from '../../assets/images/benefits/Ic_laptop.svg';
import brain from '../../assets/images/benefits/Ic_brain.svg';
import styles from './styles.module.css';

const Home = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      path: hour,
      alt: 'hour',
      value: t('flexibleSchedule'),
    },
    {
      path: homeOffice,
      alt: 'home office',
      value: t('homeOffice'),
    },
    {
      path: workShop,
      alt: 'workshop',
      value: t('trainings'),
    },
    {
      path: snacks,
      alt: 'snacks',
      value: t('snackFruit'),
    },
    {
      path: laptop,
      alt: 'laptop',
      value: t('weekRemote'),
    },
    {
      path: brain,
      alt: 'brain',
      value: t('edgeTech'),
    },
  ];

  return (
    <>
      <div className={[styles.boxContainer, 'backgroundImage'].join(' ')}>
        <div className="sectWelcome">
          <p>{t('welcomeTo')}</p>
          <p>
            <span className={styles.boldText}>{t('technicalInterview')}</span>
            {' '}
            {t('at')}
          </p>
          <p className={[styles.woloxName, styles.boldText].join(' ')}>{t('wolox')}</p>
        </div>
        <div>
          <img
            srcSet={`${imgHero} 420w, ${imgHero2} 840w, ${imgHero3} 1260w`}
            src={imgHero}
            alt="hero"
          />
        </div>
      </div>
      <div className={styles.boxContainer}>
        <img
          className={styles.woloxer}
          srcSet={`${woloxer} 750w, ${woloxer2} 1500, ${woloxer3} 2250w`}
          src={woloxer}
          alt="woloxer"
        />
        <div className={styles.countWoloxer}>
          <p>
            <span className={styles.greenColor}>{t('countWoloxer')}</span>
            <span className={styles.blueColor}>{t('woloxer')}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faTwitter} size="lg" color="white" />
            <span className={styles.whiteColor}>{t('atWolox')}</span>
          </p>
          <button
            type="button"
            className={['primaryButton', styles.btnFollowUs].join(' ')}
          >
            {t('followUs')}
          </button>
        </div>
        <div className={styles.goal}>
          <p>{t('workFor')}</p>
          <p>
            <span className={styles.blueColor}>{t('turn')}</span>
            <span className={styles.greenColor}>{t('ideas')}</span>
            <span>{t('into')}</span>
          </p>
          <p>{t('products')}</p>
        </div>
      </div>
      <div className={[styles.boxContainer, styles.benefits].join(' ')}>
        <h2>
          {t('benefitsTitle')}
          <span className={styles.blueColor}>;)</span>
        </h2>
        {benefits.map((item, key) => (
          <div key={key} className={styles.benefitBox}>
            <img src={item.path} alt={item.alt} />
            <p>{item.value}</p>
          </div>
        ))}
      </div>
      <div className={[styles.boxContainer, 'backgroundImage', styles.footer].join(' ')}>
        <h2>
          {t('thanksFor')}
          <span className={styles.blueColor}>{t('completeExercise')}</span>
        </h2>
        <p>{t('invitation')}</p>
        <button
          type="button"
          className={['primaryButton', 'btnLearnMore'].join(' ')}
        >
          {t('learnMore')}
        </button>
      </div>
    </>
  );
};

export default Home;
