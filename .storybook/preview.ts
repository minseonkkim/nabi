import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    viewMode: 'docs', 
    options: {
      storySort: {
        order: ['Documentation', 'Components'], 
      },
    },
  },
};

export default preview;
