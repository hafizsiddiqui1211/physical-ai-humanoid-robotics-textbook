import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <div style={{padding: '2rem', textAlign: 'center'}}>
        <h1 style={{fontSize: '2.5rem'}}>{siteConfig.title}</h1>
        <p style={{fontSize: '1.2rem', marginBottom: '1.5rem'}}>{siteConfig.tagline}</p>
        <div>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Start Reading the Textbook
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A comprehensive guide to Physical AI, Embodied Intelligence, and Humanoid Robotics">
      <HomepageHeader />
      <main>
        <div style={{padding: '2rem', textAlign: 'center'}}>
          <p>Welcome to the Physical AI & Humanoid Robotics Textbook.</p>
          <p>Use the navigation to explore the content or start reading with the introduction.</p>
        </div>
      </main>
    </Layout>
  );
}