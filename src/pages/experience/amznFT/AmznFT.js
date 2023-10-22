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
import styles from './AmznFT.module.css';

export const AmznFT = () => {
  const [complete] = useState(false);
  const initDelay = tokens.base.durationS;

  return (
    <Section className={styles.contact}>
      <Meta
        title="Amazon"
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
              <DecoderText text="Amazon - Software Engineer" start={status !== 'exited'} delay={300} />
              <br/>
              <br/>
              <DecoderText text="July 2020 - June 2022" start={status !== 'exited'} delay={300} />
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
            <DecoderText text="Led project for PDF to Epub conversion in the AL2 machines from the RHEL5
             machines in the Amazon format reducing conversion time by 30%. The existing system was using
              libraries 10 years older which were outdated and were upgraded to more efficient libraries. 
              Changed the scripts for conversion from Ruby to Java to keep the code consistent. " 
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
            <DecoderText text="Developed the package for supporting the conversion of Large files for 
            Comic Kindle books. I coordinated with 2 partner teams across the Kindle org and ComiXology 
            team increasing the supported comic books in Kindle from 95% to 99%." 
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
            <DecoderText text="Worked on mitigating the log4j security risk for the team in all the pipelines." start={status !== 'exited'} delay={300} />
            </Heading>
            <br/>
            <Heading
              className={styles.title}
              data-status={status}
              level={5}
              as="h5"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
            <DecoderText text="Designed the module for pdf optimizations with Foxit library to run in the AL2 
            machines from the older libraries being used which led to a much better Customer experience as the 
            latest libraries are much more reliable and didn't cause any bugs while conversion." 
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
            <DecoderText text="Integrated the above modules into the pipelines along with implementing the 
            Workflow changes for the CI/CD to run the conversion in AL2 system." 
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
