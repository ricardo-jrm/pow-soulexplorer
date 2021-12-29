import React from 'react';
import { useFury } from '@ricardo-jrm/fury';
import { Box, Grid, Paper, Typography } from '@ricardo-jrm/fury/dist/mui';

/**
 * ViewHome
 */
export const ViewHome = () => {
  const { furyActive } = useFury();

  return (
    <Grid container sx={{ minHeight: '100vh' }} alignContent="center">
      <Grid
        container
        sx={{ minHeight: '100vh' }}
        alignContent="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <Typography
            variant="h1"
            align="center"
            sx={{ color: furyActive.palette.primary.contrastText }}
          >
            Phantasma Chain Explorer
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper>
            <Box p={3}>🚧 BLOG 🚧</Box>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper>
            <Box p={3}>🚧 NEXUS 🚧</Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Box p={3}>🚧 METRICS 🚧</Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Box py={6} />
        </Grid>
      </Grid>
    </Grid>
  );
};
