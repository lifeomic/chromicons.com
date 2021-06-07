import React from 'react';
import { SharedLayout } from '../components/sharedLayout';

export function getStaticProps() {
  return {
    props: { pkgVersion: require('@lifeomic/chromicons/package.json').version },
  };
}

const About = ({ pkgVersion }) => {
  return (
    <SharedLayout pkgVersion={pkgVersion}>
      About
    </SharedLayout>
  );
}

export default About;
