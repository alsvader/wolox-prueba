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
import styles from './styles.module.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={[styles.boxContainer, 'backgroundImage'].join(' ')}>
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
      </div>
    </>
  );
};

export default Home;
