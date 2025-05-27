import SponsoringBanner from "../sponsoring-banner/SponsoringBanner";
import styles from "./sponsoring.module.css";
import text_styles from "@/css/text.module.css";

export default function Sponsoring() {
  return (
    <div>
        <SponsoringBanner />
        <div className={styles.pagecontent}>
          <div className={`${styles.section} ${styles.levelcopper}`}>
            <div className={styles.innersection}>
              <div className={styles.columnleft}>
                <img src={"/images/Copper.png"} alt="Copper Tier"/>
              </div>
              <div className={styles.columnright}>
                <h1>Copper Tier ($25 - $249)</h1>
                <p className={text_styles.bigger}>
                  <i>
                    Show your support for Robot in 3 Days by helping to cover meals, parts, and more!
                  </i>
                </p>
                <h3>What You'll Receive</h3>
                <div className={styles.chips}>
                  <div className={styles.chip}>
                    <p className={text_styles.medium}>
                      <b>Your Name on Our Website</b>
                    </p>
                    <p className={text_styles.small}>
                      on ccr.students.mtu.edu!
                    </p>
                  </div>
                  <div className={styles.chip}>
                    <p className={text_styles.medium}>
                      <b>Your Name on Our Robot</b>
                    </p>
                  </div>
                  <div className={styles.chip}>
                    <p className={text_styles.medium}>
                      <b>An End-Of-Season Team Photo</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className={`${styles.section} ${styles.levelsilver}`}>
            <div className={styles.innersection}>
              <div className={styles.columnleft}>
                <img src={"/images/Silver.png"} alt="Silver Tier"/>
              </div>
              <div className={styles.columnright}>
                <h1>Silver Tier ($250 - $999)</h1>
                <p className={text_styles.bigger}>
                  <i>
                    Allow us to develop better materials to help the FIRST Robotics community worldwide!
                  </i>
                </p>
                <h3>What You'll Receive</h3>
                <div className={styles.chips}>
                  <div className={styles.chip}>
                    <p className={text_styles.medium}>
                      <b>Your Logo on Our Live Stream</b>
                    </p>
                    <p className={text_styles.small}>
                      Streaming over Twitch and YouTube!
                    </p>
                  </div>
                  <div className={styles.chip}>
                    <p className={text_styles.medium}>
                      <b>Everything from Copper Tier</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.section} ${styles.levelgold}`}>
            <div className={styles.innersection}>
              <div className={styles.columnleft}>
                <img src={"/images/Gold.png"} alt="Gold Tier"/>
              </div>
              <div className={styles.columnright}>
                <h1>Gold Tier ($1000 - $1999)</h1>
                <p className={text_styles.bigger}>
                  <i>
                    Take our production and equipment to the next level by covering major logistical items!
                  </i>
                </p>
                <h3>What You'll Receive</h3>
                <div className={styles.chips}>
                  <div className={styles.chip}>
                    <p className={text_styles.medium}>
                      <b>Team Merchandise Logo</b>
                    </p>
                    <p className={text_styles.small}>
                      Be a part of all of our team merchandise!
                    </p>
                  </div>
                  <div className={styles.chip}>
                    <p className={text_styles.medium}>
                      <b>Bumper Sponsor Logo</b>
                    </p>
                    <p className={text_styles.small}>
                      Have your logo on our permanent robot bumpers!
                    </p>
                  </div>
                  <div className={styles.chip}>
                    <p className={text_styles.medium}>
                      <b>Featured Stream Segments</b>
                    </p>
                    <p className={text_styles.small}>
                      Get featured RI3D clips dedicated to you throughout the stream!
                    </p>
                  </div>
                  <div className={styles.chip}>
                    <p className={text_styles.medium}>
                      <b>Everything from Silver Tier</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.section} ${styles.leveldiamond}`}>
            <div className={styles.innersection}>
              <div className={styles.columnleft}>
                <img src={"/images/Diamond.png"} alt="Diamond Tier"/>
              </div>
              <div className={styles.columnright}>
                <h1>Diamond Tier ($2000+)</h1>
                <p className={text_styles.bigger}>
                  <i>
                    Become a presenting sponsor to connect with our team and brand identity!
                  </i>
                </p>
                <h3>What You'll Receive</h3>
                <div className={styles.chips}>
                  <div className={styles.chip}>
                    <p className={text_styles.medium}>
                      <b>Presenting Sponsor</b>
                    </p>
                    <p className={text_styles.small}>
                      Your logo will appear as a partner on all posters, videos, and branding!
                    </p>
                  </div>
                  <div className={styles.chip}>
                    <p className={text_styles.medium}>
                      <b>Everything from Gold Tier</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}