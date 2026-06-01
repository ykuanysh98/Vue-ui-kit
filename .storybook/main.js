

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  "stories": ['../src/stories/**/*.stories.@(js|ts)'],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/vue3-vite"
};
export default config;