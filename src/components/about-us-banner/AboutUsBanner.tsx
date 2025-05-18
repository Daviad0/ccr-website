/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './aboutusbanner.module.css';
import text_styles from "@/css/text.module.css";

export default function AboutUsBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles.logo}>
                <img src="/images/CCR_White.png" alt="CC Robotics Logo" width="100%" />
            </div>
            <h1 className={styles.title}>
                Copper Country Robotics
            </h1>
            <h3 className={styles.subtitle}>
                at Michigan Technological University
            </h3>
            <div className={styles.options}>
                <button onClick={() => {
                    window.open("https://www.involvement.mtu.edu/organization/ccr", "_blank");
                }} className='empty fill-in'><b className={text_styles.large}>Join as a Student</b></button>
                <button onClick={() => {
                    window.open("mailto:ccr-contact@mtu.edu", "_blank");
                }} className='empty fill-in'><b className={text_styles.large}>Email Our Team</b></button>
            </div>
        </div>
    )
}