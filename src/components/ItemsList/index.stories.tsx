import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ItemsList, ItemsListProps, ListCol, ListRow } from '.';

export default {
  title: 'Components/List',
  component: ItemsList,
  parameters: {
    componentSubtitle: 'Items list',
  },
} as Meta;

const cols: ListCol[] = [
  {
    label: 'label-name',
    cols: 6,
  },
  {
    label: 'label-address',
    cols: 6,
  },
];

const CellComponent = () => <>Cell</>;

const row: ListRow = [
  {
    label: 'label-name',
    cols: 6,
    component: <CellComponent />,
  },
  {
    label: 'label-address',
    cols: 6,
    component: <CellComponent />,
  },
];

const rows = [row, row];

export const StoryComponent: Story<ItemsListProps> = (args) => (
  <ItemsList {...args} cols={cols} rows={rows} />
);
