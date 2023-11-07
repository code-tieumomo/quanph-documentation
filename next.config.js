// const { remarkCodeHike } = require("@code-hike/mdx");
const { readFileSync } = require("fs");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    // remarkPlugins: [
    //   [remarkCodeHike, { theme: "one-dark-pro", showCopyButton: true }]
    // ]
    rehypePrettyCodeOptions: {
      // VSCode theme or built-in Shiki theme, see Shiki documentation for more information
      theme: JSON.parse(
        readFileSync("./public/syntax/one_dark_pro.json", "utf8")
      )
    }
  },
  defaultShowCopyCode: true
});

module.exports = withNextra();
