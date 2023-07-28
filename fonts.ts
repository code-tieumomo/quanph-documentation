import { Source_Code_Pro, Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({
  subsets: ["vietnamese"],
  variable: "--font-space-grotesk",
});

const source_code_pro = Source_Code_Pro({
  subsets: ["vietnamese"],
  variable: "--font-source-code-pro",
});

export { space_grotesk, source_code_pro };
