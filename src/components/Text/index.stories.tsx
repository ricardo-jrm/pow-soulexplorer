import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Text, TextProps } from '.';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    componentSubtitle: 'Text display component',
  },
} as Meta;

export const Basic: Story<TextProps> = (args) => (
  <Text {...args}>Basic Text</Text>
);

export const Translated: Story<TextProps> = (args) => (
  <Text {...args} translate>
    example
  </Text>
);

export const FormatNumber: Story<TextProps> = (args) => (
  <Text {...args} formatNumber>
    1337
  </Text>
);

export const FormatDate: Story<TextProps> = (args) => (
  <Text {...args} formatDate={new Date()} />
);
