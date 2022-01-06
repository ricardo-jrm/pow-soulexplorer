import React from 'react';
import { nanoid } from 'nanoid';
import { useEcho } from '@ricardo-jrm/echo';
import { useFury } from '@ricardo-jrm/fury';
import { Box, Grid } from '@ricardo-jrm/fury/dist/mui';
import { Text } from '../Text';

export type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ListCol = {
  label: string;
  cols: ColSize;
};

export type ListCell = {
  label: string;
  component: React.ReactNode;
  cols: ColSize;
};

export type ListRow = ListCell[];

/**
 * ItemsList props
 */
export interface ItemsListProps {
  cols: ListCol[];
  rows: ListRow[];
}

/**
 * ItemsList
 */
export const ItemsList = ({ cols, rows }: ItemsListProps) => {
  const { echo } = useEcho();
  const { furyActive } = useFury();

  return (
    <Box>
      {/* Desktop */}
      <Box display={{ xs: 'none', md: 'block' }}>
        <Grid
          container
          alignItems="center"
          py={1}
          sx={{ borderBottom: `1px solid ${furyActive.palette.divider}` }}
        >
          {cols.map((col) => (
            <Grid key={col.label} item xs={col.cols}>
              <Text sx={{ fontWeight: 600 }}>{echo(col.label)}</Text>
            </Grid>
          ))}
        </Grid>
        {rows.map((row) => (
          <Grid
            container
            key={nanoid()}
            alignItems="center"
            py={1.5}
            sx={{ borderBottom: `1px solid ${furyActive.palette.divider}` }}
          >
            {row.map((cell) => (
              <Grid item key={nanoid()} xs={cell.cols}>
                {cell.component}
              </Grid>
            ))}
          </Grid>
        ))}
      </Box>

      {/* Mobile */}
      <Box
        display={{ md: 'none' }}
        sx={{ borderTop: `1px solid ${furyActive.palette.divider}` }}
      >
        {rows.map((row) => (
          <Box
            key={nanoid()}
            p={1.5}
            sx={{ borderBottom: `1px solid ${furyActive.palette.divider}` }}
          >
            {row.map((cell) => (
              <Grid container spacing={1} key={nanoid()}>
                <Grid item>
                  <Text sx={{ fontWeight: 600 }}>{`${echo(
                    cell.label,
                  )}: `}</Text>
                </Grid>
                <Grid item>{cell.component}</Grid>
              </Grid>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
