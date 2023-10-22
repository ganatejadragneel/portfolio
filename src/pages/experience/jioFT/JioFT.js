import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { useState } from 'react';
import { cssProps, msToNum, numToMs } from 'utils/style';
import styles from './JioFT.module.css';

export const JioFT = () => {
  const [complete] = useState(false);
  const initDelay = tokens.base.durationS;

  return (
    <Section className={styles.contact}>
      <Meta
        title="Jio"
        description="Send me a message if you’re interested in discussing a project or if you just want to say hi"
      />
      <Transition unmount in={!complete} timeout={1600}>
        {(visible, status) => (
          <form className={styles.form}>
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Jio - Software Engineer" start={status !== 'exited'} delay={300} />
              <br/>
              <br/>
              <DecoderText text="August 2022 - August 2023" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />

            <Heading
              className={styles.title}
              data-status={status}
              level={5}
              as="h5"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
            <DecoderText text="Developed the Voucher feature for Uploading new Voucher, Searching for 
            existing vouchers, and Cancelling a used voucher to be used by the enterprises and vendors 
            thereby increasing userbase by 15% and getting a higher retention. " 
            start={status !== 'exited'} delay={300} />
            </Heading>
            <br/>
            <Heading
              className={styles.title}
              data-status={status}
              level={5}
              as="h5"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
            <DecoderText text="Developed a Documentation portal for all the services using the library 
            swagger-ui-react with which the customers/developers can easily access the API's and use them 
            in the web portal by inputting the headers and body of the API." 
            start={status !== 'exited'} delay={300} />
            </Heading>
            <br/>
            <Heading
              className={styles.title}
              data-status={status}
              level={5}
              as="h5"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
            <DecoderText text="Enhanced the data fetching TTL significantly in the B2B service component by 
            implementing Redis caching in the major APIs being used which improved the TTL by 70% ." 
            start={status !== 'exited'} delay={300} />
            </Heading>
            <br/>
            <Heading
              className={styles.title}
              data-status={status}
              level={5}
              as="h5"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
            <DecoderText text="Upgraded the Spring and Oracle DB versions in the Coupons B2B service to the 
            latest approved versions in 2023 to mitigate the security risks." start={status !== 'exited'} delay={300} />
            </Heading>
            <br/>
            <Heading
              className={styles.title}
              data-status={status}
              level={5}
              as="h5"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
            <DecoderText text="With ELK (Elastic Search, Logstash, Kibana), worked with interns to create 
            a portal for easier viewing of logs from the services instead of using the terminal and manually 
            debugging. This reduced the debugging time significantly by 75% which made the team more efficient." 
            start={status !== 'exited'} delay={300} />
            </Heading>

          </form>
          
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
