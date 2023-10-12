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
import styles from './Contact.module.css';

export const Contact = () => {
  const [complete] = useState(false);
  const initDelay = tokens.base.durationS;

  return (
    <Section className={styles.contact}>
      <Meta
        title="Contact"
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
              <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h2"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
            <DecoderText text="Email me @ akulaganateja@gmail.com" start={status !== 'exited'} delay={300} />
            </Heading>
            <br/>
            <br/>
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="hw"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
            <DecoderText text="Dm me @ linkedin https://www.linkedin.com/in/gana-teja-akula/" start={status !== 'exited'} delay={300} />
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
