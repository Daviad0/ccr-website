/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './volunteeringbanner.module.css';
import text_styles from "@/css/text.module.css";

export default function VolunteeringBanner() {
    return (
        <div className={styles.banner}>
        
            <h1 className={styles.title}>
                CCR Volunteers Around Michigan
            </h1>

            <div className={styles.options}>
                <button className='empty fill-in'><b className={text_styles.large}>Volunteer as a Student</b></button>
                <button className='empty fill-in'><b className={text_styles.large}>How We Make an Impact</b></button>
            </div>
        
        </div>
    )
}