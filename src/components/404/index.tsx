import React from 'react';
import { Box, Paper } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../Text';

/**
 * NotFound props
 */
export interface NotFoundProps {
  kind: string;
}

/**
 * NotFound
 */
export const NotFound = ({ kind }: NotFoundProps) => {
  const { echo } = useEcho();
  return (
    <Paper>
      <Box px={{ xs: 1, md: 3 }} py={9}>
        <Text label="404" spacing={1} variant="h4">
          {`${echo(kind)} ${echo('not-found')}`}
        </Text>
      </Box>
    </Paper>
  );
};
