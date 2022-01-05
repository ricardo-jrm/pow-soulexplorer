import React from 'react';
import { Box, Paper } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';

/**
 * ViewChain
 */
export const ViewChain = () => {
  const { echo } = useEcho();
  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('chain-title')}
      </Text>
      <Box py={3}>
        <Paper>
          <Box py={6} />
        </Paper>
      </Box>
    </Box>
  );
};
