import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Poseidon-Docs</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Poseidon-Docs official document',
  },
  useNextSeoProps() {
    const defaultSeoProps = {
      description: 'TODO',
      openGraph: {
        description: 'TODO',
        title: 'Poseidon-Docs docs',
        // images: [{ url: 'https://wagmi.sh/og.png' }],
      },
      themeColor: '#ffffff',
      twitter: {
        cardType: 'TODO',
        handle: 'TODO',
        site: 'TODO',
      },
    } as const;

    return { ...defaultSeoProps, titleTemplate: '%s – Poseidon-Docs' };
  },
};

export default config;
