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
import styles from './AmznIntern.module.css';

export const AmznIntern = () => {
  const [complete] = useState(false);
  const initDelay = tokens.base.durationS;

  return (
    <Section className={styles.contact}>
      <Meta
        title="Amazon Intern"
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
              <DecoderText text="Amazon - Software Engineer Intern" start={status !== 'exited'} delay={300} />
              <br/>
              <br/>
              <DecoderText text="Feb 2020 - July 2020" start={status !== 'exited'} delay={300} />
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
            <DecoderText text="Developed support for Incremental Conversion of books from Epub to Amazon format. 
            Each epub took more than 5 mins to convert from the epub format to the Kindle format which gave a bad
             CX. This feature enhanced the publisher’s experience by rendering a page every 4 seconds from an
              average of 5 minutes for the complete book. " start={status !== 'exited'} delay={300} />
            </Heading>

            <br/>
            <br/>
            <Heading
              className={styles.title}
              data-status={status}
              level={5}
              as="h5"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
            <DecoderText text="Implemented methods to support Kindle features in Nested tables for the complex 
            edge cases in Kindle increasing the tables related feature support from 97% to 99.9%." start={status !== 'exited'} delay={300} />
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
