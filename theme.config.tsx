import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Image from "next/image";
import Logo from "./assets/rocket.gif";
import { useRouter } from "next/router";

const logo = (
  <div className="flex items-center gap-2">
    <Image src={Logo} alt="Logo" width={32} height={32}></Image>
    <span className="text-xl font-bold">...</span>
  </div>
);

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – ..."
      };
    }
  },
  logo,
  project: {
    link: "https://github.com/shuding/nextra-docs-template"
  },
  // docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  // banner: {
  //   key: "2.0-release",
  //   text: (
  //     <a href="#" target="_blank" rel="noreferrer">
  //       🎉 Migrated from Docusaurus to Nextra.
  //     </a>
  //   )
  // },
  head: function useHead() {
    const { frontMatter } = useConfig();

    const imageLink =
      frontMatter.image ??
      "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=1380&t=st=1690891839~exp=1690892439~hmac=27f746530018fbd24b7aa5952c4252b1ab25259c9d77f4086090d5fca082ca00";

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={imageLink} />
        <link
          rel="icon"
          href="https://img.icons8.com/fluency/48/copybook--v2.png"
        ></link>
        <meta name="og:image" content={imageLink} />
      </>
    );
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 2,
    toggleButton: true
  },
  footer: {
    text: (
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={Logo} alt="Logo" width={32} height={32}></Image>
            <span className="ml-3 text-xl">...</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 ... —
            <a
              href="https://github.com/code-tieumomo"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @quanph
            </a>
          </p>
        </div>
      </div>
    )
  }
};

export default config;
