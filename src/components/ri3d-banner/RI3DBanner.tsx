/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './ri3dbanner.module.css';
import text_styles from "@/css/text.module.css";

export default function RI3DBanner() {
    return (
        <div className={styles.banner}>
        
            <h1 className={styles.title}>
                Robot in 3 Days 2026
            </h1>

            <h3 className={styles.subtitle}>
                Beginning on January 10th, 2026
            </h3>
            <div className={styles.options}>
                <button className='empty fill-in'><b className={text_styles.large}>Get Connected</b></button>
                <button className='empty fill-in'><b className={text_styles.large}>Learn About RI3D 2025</b></button>
            </div>
        
        </div>
    )
}