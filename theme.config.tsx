import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const github = "https://github.com/Manta-Network/zkShuffle-docs";

const config: DocsThemeConfig = {
  logo: <Image src="/images/logo.png" alt="logo" width={40} height={40} />,
  project: {
    link: github,
  },
  chat: {
    link: "https://discord.gg/vp4A6BUtct",
  },
  docsRepositoryBase: `https://github.com/Manta-Network/zkShuffle-docs`,
  footer: {
    text: "zkShuffle SDK document",
  },
  editLink: {
    text() {
      return <></>;
    },
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
    </>
  ),
  useNextSeoProps() {
    const defaultSeoProps = {
      description: "TODO",
      openGraph: {
        description: "TODO",
        title: "zkShuffle-Docs docs",
        // images: [{ url: 'https://wagmi.sh/og.png' }],
      },
      themeColor: "#ffffff",
      twitter: {
        cardType: "TODO",
        handle: "TODO",
        site: "TODO",
      },
    } as const;

    return { ...defaultSeoProps, titleTemplate: "%s – zkShuffle-Docs" };
  },
};

export default config;
