import React from 'react';
import { useTranslation } from 'react-i18next';
import imgHero from '../../assets/images/img_hero/Ic_ilustra_Hero.png';
import imgHero2 from '../../assets/images/img_hero/Ic_ilustra_Hero@2x.png';
import imgHero3 from '../../assets/images/img_hero/Ic_ilustra_Hero@3x.png';
import styles from './styles.module.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={[styles.welcomeBox, 'backgroundImage'].join(' ')}>
      <div>
        <p>{t('welcomeTo')}</p>
        <p>
          <span className={styles.boldText}>{t('technicalInterview')}</span>
          {' '}
          {t('in')}
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
  );
};

export default Home;
