import React from 'react';
import { Box, Paper } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';

/**
 * ViewBlock
 */
export const ViewBlock = () => {
  const { echo } = useEcho();
  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('block-title')}
      </Text>
      <Box py={3}>
        <Paper>
          <Box py={6} />
        </Paper>
      </Box>
    </Box>
  );
};
