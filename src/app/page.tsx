'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useContext } from 'react';
import styles from './page.module.css';
import AboutUs from '@/components/pages/AboutUs';
import { PageContext } from './MainPage';
import Volunteering from '@/components/pages/Volunteering';
import Sponsoring from '@/components/pages/Sponsoring';
import RI3D from '@/components/pages/RI3D';

export default function Home() {

  const page = useContext(PageContext);

  return (
    <div className={styles.content}>
      <div className={styles.page} style={{
        opacity: page.url == "home" ? 1 : 0,
        visibility: page.url == "home" ? "visible" : "hidden",
      }}>
        <AboutUs />
      </div>
      <div className={styles.page} style={{
        opacity: page.url == "volunteering" ? 1 : 0,
        visibility: page.url == "volunteering" ? "visible" : "hidden",
      }}>
        <Volunteering />
      </div>
      <div className={styles.page} style={{
        opacity: page.url == "sponsoring" ? 1 : 0,
        visibility: page.url == "sponsoring" ? "visible" : "hidden",
      }}>
        <Sponsoring />
        </div>
      
      <div className={styles.page} style={{
        opacity: page.url == "ri3d" ? 1 : 0,
        visibility: page.url == "ri3d" ? "visible" : "hidden",
      }}>
        <RI3D />
        </div>
    </div>
  );
}
