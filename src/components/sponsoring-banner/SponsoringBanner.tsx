/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './sponsoringbanner.module.css';
import text_styles from "@/css/text.module.css";

export default function SponsoringBanner() {
    return (
        <div className={styles.banner}>
        
            <h1 className={styles.title}>
                Help Us Help Others
            </h1>

            <h3 className={styles.subtitle}>
                Every contribution helps us make a difference
            </h3>
            <div className={styles.options}>
                <button className='empty fill-in'><b className={text_styles.large}>Sponsorship Tiers</b></button>
                <button className='empty fill-in'><b className={text_styles.large}>What We Offer</b></button>
                <button className='empty fill-in'><b className={text_styles.large}>How Your Donation Counts</b></button>
            </div>
        
        </div>
    )
}