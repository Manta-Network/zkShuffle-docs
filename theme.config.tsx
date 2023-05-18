import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Image from 'next/image';
const config: DocsThemeConfig = {
  logo: <Image src="/images/logo.png" alt="logo" width={40} height={40} />,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Poseidon document',
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
