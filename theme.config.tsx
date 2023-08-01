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
        titleTemplate: "%s – ...",
      };
    }
  },
  logo,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  // docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  // banner: {
  //   key: "2.0-release",
  //   text: (
  //     <a href="#" target="_blank" rel="noreferrer">
  //       🎉 Migrated from Docusaurus to Nextra. Read more →
  //     </a>
  //   ),
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
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <div className="flex items-center gap-1 text-current">
            <span>Powered by</span>
            <a
              href="https://github.com/code-tieumomo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quanph
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs">© {new Date().getFullYear()} quanph.</p>
      </div>
    ),
  },
};

export default config;
