import AboutUsBanner from "../about-us-banner/AboutUsBanner";
import styles from './aboutus.module.css';
import text_styles from "@/css/text.module.css";

export default function AboutUs() {
  return (
    <div>
        <AboutUsBanner />
        <div className={styles.pagecontent}>
          <div className={styles.section}>
            <h1>Made up of Michigan Tech Huskies</h1>
            <p className={text_styles.bigger}>
                <i>FIRST</i> Alumni that come to Michigan Tech almost always get involved with Copper Country Robotics as a <b>mentor</b>, <b>volunteer</b>, or <b>robot builder</b>.
            </p>

            <p className={text_styles.bigger}>
                We strive to connect the Upper Peninsula with the rest of the <i>FIRST</i> Robotics community every year. You&apos;ll see us at local <i>FIRST</i> Robotics Competition and <i>FIRST</i> Tech Challenge events, as well as local community events built to make the Upper Peninsula stronger.
            </p>
          </div>
          <div className={styles.section}>
            <h1>Meet, Email, and Chat With Us</h1>
            <div className={styles.box}>
              <h2>Michigan Tech Students</h2>
              <p className={text_styles.bigger}>
                  Meet with Copper Country Robotics during our General Meetings, or stop by one of our booths at the <b>major campus involvement events!</b>
              </p>

              <div className={styles.chips}>
                <div className={styles.chip} onClick={() => {
                  window.open("https://www.mtu.edu/student-leadership/traditions/k-day/", "_blank");
                }}>
                  <p className={text_styles.medium}>
                    <b>Keweenaw Day Booth</b>
                  </p>
                  <p className={text_styles.small}>
                    In Chassell on September 5th, 2025
                  </p>
                </div>
                <div className={styles.chip} onClick={() => {
                  window.open("https://www.mtu.edu/student-leadership/traditions/k-day/", "_blank");
                }}>
                  <p className={text_styles.medium}>
                    <b>Orientation Week Bonfire</b>
                  </p>
                  <p className={text_styles.small}>
                   At Prince&apos;s Point on August 19th at 5:00 PM
                  </p>
                </div>
                <div className={styles.chip} onClick={() => {
                  window.open("https://www.mtu.edu/student-leadership/traditions/k-day/", "_blank");
                }}>
                  <p className={text_styles.medium}>
                    <b>Welcome Week Robot Driving</b>
                  </p>
                  <p className={text_styles.small}>
                    At the ChemSci Building during Afternoon on the Town
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <h2>Teams, Volunteer Coordinators, and the Community</h2>
              <p className={text_styles.bigger}>
                Email our Executive Board at <b>ccr-contact@mtu.edu</b> with your inquiries, and we will get back to you shortly!
              </p>
              <p className={text_styles.bigger}>
                We&apos;re also present at many of the community local events in the area, including the <b>Robot Fair Play booth</b>, <b>Superior MakerFest</b>, <b>Superior Robowork&apos;s FRC Kickoff</b>, and more!
              </p>
            
            </div>
          
          </div>
        </div>

        <div className={styles.section}>
          <h1>Building a Network of Mentors and Teams</h1>
          <p className={text_styles.bigger}>
              Every year, our goal is to engage with more and more FRC teams around the Upper Peninsula. Across the last few years, we&apos;ve made quite a lasting impact on teams throughout the UP.
          </p>
          <p className={text_styles.bigger}>
              We celebrate and recognize our mentors and the teams that allow us to <b>expand and grow the network of engaged <i>FIRST</i> Alumni!</b>
          </p>

          <div className={styles.chips}>
            <div className={styles.chip} onClick={() => {
              window.open("https://www.thebluealliance.com/team/857", "_blank");
            }}>
              <p className={text_styles.medium}>
                <b>Team 857</b>
              </p>
              <p className={text_styles.small}>
                Superior Roboworks of Houghton, MI
              </p>
            </div>
            <div className={styles.chip} onClick={() => {
              window.open("https://www.thebluealliance.com/team/2586", "_blank");
            }}>
              <p className={text_styles.medium}>
                <b>Team 2586</b>
              </p>
              <p className={text_styles.small}>
                The Copperbots of Calumet, MI
              </p>
            </div>
            <div className={styles.chip} onClick={() => {
              window.open("https://www.thebluealliance.com/team/4391", "_blank");
            }}>
              <p className={text_styles.medium}>
                <b>Team 4391*</b>
              </p>
              <p className={text_styles.small}>
                BraveBots of Gladstone, MI
              </p>
            </div>
            <div className={styles.chip} onClick={() => {
              window.open("https://www.thebluealliance.com/team/5486", "_blank");
            }}>
              <p className={text_styles.medium}>
                <b>Team 5486</b>
              </p>
              <p className={text_styles.small}>
                Robotic Turmoil of Lake Linden, MI
              </p>
            </div>
            <div className={styles.chip} onClick={() => {
              window.open("https://www.thebluealliance.com/team/6345", "_blank");
            }}>
              <p className={text_styles.medium}>
                <b>Team 6345</b>
              </p>
              <p className={text_styles.small}>
                Nimrod Nation of Watersmeet, MI
              </p>
            </div>
            <div className={styles.chip} onClick={() => {
              window.open("https://www.thebluealliance.com/team/6558", "_blank");
            }}>
              <p className={text_styles.medium}>
                <b>Team 6558</b>
              </p>
              <p className={text_styles.small}>
                Aluminum Sting of L&apos;Anse, MI
              </p>
            </div>
            <div className={styles.chip} onClick={() => {
              window.open("https://www.thebluealliance.com/team/6569", "_blank");
            }}>
              <p className={text_styles.medium}>
                <b>Team 6569</b>
              </p>
              <p className={text_styles.small}>
                Ontonagon Gladiators of Ontonagon, MI
              </p>
            </div>
            <div className={styles.chip} onClick={() => {
              window.open("https://www.thebluealliance.com/team/7768", "_blank");
            }}>
              <p className={text_styles.medium}>
                <b>Team 7768</b>
              </p>
              <p className={text_styles.small}>
                The AutoMatons of Iron River, MI
              </p>
            </div>
            <div className={styles.chip} onClick={() => {
              window.open("https://www.thebluealliance.com/team/9249", "_blank");
            }}>
              <p className={text_styles.medium}>
                <b>Team 9249</b>
              </p>
              <p className={text_styles.small}>
                Chassell Mountain Cats of Chassell, MI
              </p>
            </div>
            <div className={styles.chip} onClick={() => {
              window.open("https://www.thebluealliance.com/team/9755", "_blank");
            }}>
              <p className={text_styles.medium}>
                <b>Team 9755</b>
              </p>
              <p className={text_styles.small}>
                Red Devil Robotics of Ironwood, MI
              </p>
            </div>
            <div className={styles.chip} onClick={() => {
              window.open("https://www.thebluealliance.com/team/10622", "_blank");
            }}>
              <p className={text_styles.medium}>
                <b>Team 10622</b>
              </p>
              <p className={text_styles.small}>
                Gwinn ModelBots of Gwinn, MI
              </p>
            </div>
          </div>
        </div>
        
    </div>
  );
}