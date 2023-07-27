import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
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
  head: (
    <>
      <link
        rel="icon"
        href="https://img.icons8.com/fluency/48/copybook--v2.png"
      ></link>
    </>
  ),
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
