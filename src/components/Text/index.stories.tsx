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

export const BasicText: Story<TextProps> = (args) => (
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

export const Capitalize: Story<TextProps> = (args) => (
  <Text {...args} capitalize>
    lorem ipsum dolor sit amet
  </Text>
);

export const CapitalizeWords: Story<TextProps> = (args) => (
  <Text {...args} capitalize="allWords">
    lorem ipsum dolor sit amet
  </Text>
);

export const CapitalizeClipboard: Story<TextProps> = (args) => (
  <Text {...args} capitalize="allWords" clipboard>
    lorem ipsum dolor sit amet
  </Text>
);

export const Truncate: Story<TextProps> = (args) => (
  <Text {...args} truncate={{ len: 20 }}>
    Lorem ipsum dolor sit amet
  </Text>
);

export const TruncateWords: Story<TextProps> = (args) => (
  <Text {...args} truncate={{ len: 20, keepLastWord: true }}>
    Lorem ipsum dolor sit amet
  </Text>
);

export const TruncateClipboard: Story<TextProps> = (args) => (
  <Text {...args} truncate={{ len: 20, keepLastWord: true }} clipboard>
    Lorem ipsum dolor sit amet
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

export const Link: Story<TextProps> = (args) => (
  <Text
    {...args}
    link={{
      href: '/?path=/story/lab-example--story-component',
    }}
  >
    Link (Doesn&apos;t work inside Storybook unless ctrl+click)
  </Text>
);

export const LinkExternal: Story<TextProps> = (args) => (
  <Text
    {...args}
    link={{
      href: 'https://github.com/ricardo-jrm/pow-soulexplorer',
      external: true,
    }}
  >
    External link
  </Text>
);
