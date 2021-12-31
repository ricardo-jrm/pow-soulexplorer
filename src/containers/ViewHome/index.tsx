import React from 'react';
import { useFury } from '@ricardo-jrm/fury';
import { Box, Grid, Paper, Typography } from '@ricardo-jrm/fury/dist/mui';
import { Image } from '../../components/Image';

/**
 * ViewHome
 */
export const ViewHome = () => {
  const { furyActive } = useFury();

  return (
    <Grid container sx={{ minHeight: '100vh' }} alignContent="center">
      <Grid
        item
        xs={12}
        container
        sx={{ minHeight: '100vh' }}
        alignContent="center"
        spacing={3}
      >
        <Grid
          item
          xs={12}
          container
          alignItems={'center'}
          alignContent="center"
          justifyContent={'center'}
          spacing={2}
        >
          <Grid item>
            <Image src="/static/v1/img/explorer-logo.png" height="4vw" />
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              align="center"
              sx={{ color: furyActive.palette.primary.contrastText }}
            >
              Phantasma Chain Explorer
            </Typography>
          </Grid>
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
