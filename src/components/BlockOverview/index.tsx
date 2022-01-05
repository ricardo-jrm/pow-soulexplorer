import React from 'react';
import { useEcho } from '@ricardo-jrm/echo';
import { useFury } from '@ricardo-jrm/fury';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { Text } from '../Text';
import { Block } from '../../mocks/blocks';

/**
 * BlockOverviewProps
 */
export interface BlockOverviewProps {
  block: Block;
}

/**
 * BlockOverview
 */
export const BlockOverview = ({ block }: BlockOverviewProps) => {
  const { echo } = useEcho();
  const { furyActive } = useFury();
  const { palette } = furyActive;

  return (
    <Box>
      <Text
        label={echo('label-date')}
        spacing={1}
        paragraph
        clipboard
        formatDate={block.date}
      />
      {/* <Text label={echo('label-type')} spacing={1} paragraph clipboard>
        {block.type}
      </Text>
      <Text
        label={echo('label-name')}
        spacing={1}
        paragraph
        clipboard
        link={{
          href: `/contract?name=${block.name}`,
        }}
        linkStyles={{
          color: palette.secondary.main,
        }}
      >
        {block.name}
      </Text> */}
    </Box>
  );
};
