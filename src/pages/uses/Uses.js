import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Skills"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Skills"
          description="A somewhat comprehensive list of tools, apps, and more that I use on a daily basis to design and code things."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading></ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Programming</TableHeadCell>
                    <TableCell>
                      <img src="https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white" alt="Gana Java" />
                      <img src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="Gana javascript" />
                      <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="Gana c++" />
                      <img src="https://img.shields.io/badge/MySQL-00000F?style=flat&logo=mysql&logoColor=white" alt="Gana sql" />
                      <img src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="Gana python" />
                      <img src="https://img.shields.io/badge/HTML-239120?style=flat&logo=html5&logoColor=white" alt="Gana html" />
                      <img src="https://img.shields.io/badge/CSS-239120?&style=flat&logo=css3&logoColor=white" alt="Gana css" />

                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Frameworks</TableHeadCell>
                    <TableCell>
                      <img src="https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=spring&logoColor=white" alt="Gana spring" />
                      <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" alt="Gana react" />
                      <img src="https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white" alt="Gana angular" />
                      <img src="https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white" alt="Gana django" />
                      <img src="https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB" alt="Gana reactnative" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Miscellaneous</TableHeadCell>
                    <TableCell>
                      <img src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black" alt="Gana linux" />
                      <img src="https://img.shields.io/badge/Shell_Script-121011?style=flat&logo=gnu-bash&logoColor=white" alt="Gana shell" />
                      <img src="https://img.shields.io/badge/GIT-E44C30?style=flat&logo=git&logoColor=white" alt="Gana git" />
                      <img src="https://img.shields.io/badge/Elastic_Search-005571?style=flat&logo=elasticsearch&logoColor=white" alt="Gana elastic search" />
                      <img src="https://img.shields.io/badge/Kibana-005571?style=flat&logo=Kibana&logoColor=white" alt="Gana kibana" />
                      <img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=flat&logo=amazon-aws&logoColor=white" alt="Gana aws" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Certifications</TableHeadCell>
                    <TableCell>
                      <ul>
                        <li>Design Patterns</li>
                        <li>Parallel programming in Java</li>
                        <li>C++ Advanced Topics</li>
                        <li>Machine Learning</li>
                        <li>Home Networking Basics</li>
                        <li>Applied Text Mining</li>
                        <li>Image and Video processing</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
