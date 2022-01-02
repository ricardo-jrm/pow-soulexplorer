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

export const BasicLabel: Story<TextProps> = (args) => (
  <Text {...args} label="Label" spacing={1}>
    Basic Text
  </Text>
);

export const BasicClipboard: Story<TextProps> = (args) => (
  <Text {...args} clipboard spacing={1}>
    Basic Text
  </Text>
);

export const Translated: Story<TextProps> = (args) => (
  <Text {...args} translate>
    example
  </Text>
);

export const TranslatedLabel: Story<TextProps> = (args) => (
  <Text {...args} translate label="example" spacing={1}>
    example
  </Text>
);

export const TranslatedClipboard: Story<TextProps> = (args) => (
  <Text {...args} translate clipboard spacing={1}>
    example
  </Text>
);

export const FormatNumber: Story<TextProps> = (args) => (
  <Text {...args} formatNumber>
    1337
  </Text>
);

export const FormatNumberClipboard: Story<TextProps> = (args) => (
  <Text {...args} formatNumber clipboard>
    1337
  </Text>
);

export const FormatDate: Story<TextProps> = (args) => (
  <Text {...args} formatDate={new Date()} />
);

export const FormatDateClipboard: Story<TextProps> = (args) => (
  <Text {...args} formatDate={new Date()} clipboard />
);
