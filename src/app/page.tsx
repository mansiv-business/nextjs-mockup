import * as motion from "motion/react-client";

import styles from './page.module.css'
import { fadeIn, hoverAnimation } from "@/lib/animations";
import AlertWrapper from "@/components/alertwrapper"


const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <a href="#">
          LOGO
        </a>
        <motion.button {...hoverAnimation}>Hire us</motion.button>
      </header>

      <AlertWrapper/>

      <main>
        <section className={styles.heroSection}>
          <motion.h1 {...fadeIn}>
            Your Professional Online Business partner
          </motion.h1>
          <p>Get your business seen in all places — from AI search recommendations to social media platforms.</p>
          <motion.button {...hoverAnimation}>Work with us</motion.button>
        </section>

        <div className="lightDiv">
          <section className={styles.testimonialSection}>
            <h2>Some Companies We have Worked with</h2>
            <div>
              <span>Company1</span>
              <span>Company2</span>
              <span>Company3</span>
              <span>Company4</span>
            </div>
          </section>

          <section className={styles.serviceSection}>
            <motion.h2 {...fadeIn}>Let Your Business Reach Its Peak Through Our services</motion.h2>
            <ul>
              <motion.li {...fadeIn}>
                <img src="/images/magnify.svg" alt="" area-hidden="true" />
                <h3>Search Engine Optimization</h3>
                <p>Focused on increasing search visibility, attracting high-intent traffic, and delivering long-term growth.</p>
              </motion.li>
              <motion.li {...fadeIn}>
                <img src="/images/sparkles.svg" alt="" area-hidden="true" />
                <h3>Creative Storytelling and Branding</h3>
                <p>Strategic storytelling and branding designed to capture attention and drive real business growth.</p>
              </motion.li>
              <motion.li {...fadeIn}>
                <img src="/images/chart.svg" alt="" area-hidden="true" />
                <h3>Performance Marketing</h3>
                <p>Data-driven marketing campaigns built to turn clicks into qualified leads and measurable revenue.</p>
              </motion.li>
            </ul>
          </section>

          <section className={styles.aboutSection}>
            <h2>Some Info about our agency</h2>
            <motion.p {...fadeIn}>We’re a results-driven digital marketing agency helping Service based businesses grow through SEO, branding, and performance marketi.</motion.p>


            <p>Our team is active throughout the entire United States to help youreach out anytime</p>
            <div>
              <span>Map will be generated from mapbox.com or Google Maps according to your need</span>
            </div>

          </section>

          <section className={styles.reviewSection}>
            <h2>Results of Our work</h2>
            <div>
              <article>
                <h3>Company1</h3>
                <div>
                  <figure>
                    <figcaption>
                      <strong>John Doe</strong>, <cite>Co-Founder</cite>
                    </figcaption>


                    <blockquote>
                      <p>They didn’t just run ads — they understood our brand and told our story the right way. The results spoke for themselves.</p>
                    </blockquote>
                  </figure>

                  <ul>
                    <li><span>429%</span> Traffic</li>
                    <li><span>5%</span> Conversion rate</li>
                    <li><span>250%</span> Revenue since last month</li>
                  </ul>
                </div>
              </article>

              <article>
                <h3>Company2</h3>

                <div>
                  <figure>
                    <figcaption>
                      <strong>Ahmed Farisi</strong>, <cite>Marketing Director</cite>
                    </figcaption>


                    <blockquote>
                      <p>Transparent communication, strong execution, and real results. We saw an increase in qualified leads within weeks.</p>
                    </blockquote>
                  </figure>

                  <ul>
                    <li><span>370%</span> Traffic</li>
                    <li><span>7%</span> Conversion rate</li>
                    <li><span>255%</span> Revenue since last month</li>
                  </ul>
                </div>
              </article>

              <article>
                <h3>Company3</h3>

                <div>
                  <figure>
                    <figcaption>
                      <strong>John Doe</strong>, <cite>Co-Founder</cite>
                    </figcaption>


                    <blockquote>
                      <p>Working with this team completely changed our online presence. From SEO to paid campaigns, everything was clear, measurable, and effective.</p>
                    </blockquote>
                  </figure>

                  <ul>
                    <li><span>525%</span> Traffic</li>
                    <li><span>6%</span> Conversion rate</li>
                    <li><span>278%</span> Revenue since last month</li>
                  </ul>
                </div>
              </article>
            </div>
          </section>

          <section className={styles.cta}>
            <h2>Ready to Boost Your Business?</h2>
            <motion.button {...hoverAnimation}>Work with us</motion.button>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerDiv}>
          <section area-labelledby="footer-info">
            <h3>(LOGO) Company Name</h3>
            <p>name@company.com</p>
            <p>Number: <span>01958478205755</span></p>
          </section>
          <section area-labelledby="footer-offices">
            <h3>Offices: </h3>
            <ul>
              <li>Antarctica, Sector 5, Road 7</li>
              <li>Siberia, Road 56</li>
              <li>North America, chille</li>
              <li>California,Sector 36, Road 205</li>
            </ul>
          </section>

          <section aria-labelledby="footer-social">
            <h3>Social Media Links:</h3>
            <ul>
              <li><img src="/images/ic_outline-email.svg" alt="email" /></li>
              <li><img src="/images/mingcute_linkedin-line.svg" alt="linkedin" /></li>
              <li><img src="/images/mdi_instagram.svg" alt="instagram" /></li>
              <li><img src="/images/twitter.svg" alt="twitter" /></li>
            </ul>
          </section>
        </div>
        <div className={styles.footerPartner}>
          <h3>Premiere Partners</h3>
          <span>PARTNER1</span><span>PARTNER2</span><span>PARTNER3</span><span>PARTNER4</span>
        </div>
      </footer>
    </>
  )
}

export default Home
