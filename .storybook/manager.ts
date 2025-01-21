import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light, 
    brandTitle: 'Nabi',
    brandUrl: 'https://nabi-eight.vercel.app/?path=/docs/documentation-configure--docs',
    brandImage: '/logo.png', 
  },
});
