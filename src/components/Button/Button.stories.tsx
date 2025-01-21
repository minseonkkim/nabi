import { Button } from './Button';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['solid'],
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Solid Button',
  onClick: () => alert('Solid Button clicked'),
  variant: 'solid',
};