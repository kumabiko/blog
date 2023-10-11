/** @type {import('prettier').Config} */
module.exports = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  // @ianvs/prettier-plugin-sort-imports
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/src/components/(.*)$",
    "^@/src/app/(.*)$",
    "",
    "^[./]",
  ],
};
