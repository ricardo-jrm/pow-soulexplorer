import React from 'react';
import NextLink from 'next/link';
import { useFury } from '@ricardo-jrm/fury';
import { useEcho } from '@ricardo-jrm/echo';
import {
  Box,
  Grid,
  Paper,
  Button,
  Link as MuiLink,
  Tooltip,
} from '@ricardo-jrm/fury/dist/mui';
import { Text } from '../../components/Text';
import { Image } from '../../components/Image';
import { HEADER_HEIGHT, FOOTER_HEIGHT } from '../../cfg/layout';

/**
 * ViewHome
 */
export const ViewHome = () => {
  const { furyActive } = useFury();
  const { echo } = useEcho();

  return (
    <Grid
      container
      sx={{
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px)`,
      }}
      alignContent="center"
    >
      <Grid
        item
        xs={12}
        container
        sx={{
          minHeight: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px)`,
        }}
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
            <Box pt={0.9}>
              <Image
                src="/static/v1/img/explorer-logo.png"
                height={furyActive.typography.h1.fontSize as string}
              />
            </Box>
          </Grid>
          <Grid item>
            <Text
              variant="h1"
              align="center"
              sx={{ color: furyActive.palette.primary.contrastText }}
            >
              Phantasma Chain Explorer
            </Text>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper sx={{ minHeight: '201px' }}>
            <Box textAlign="center" pt={0.9} pb={1.5} px={1.2}>
              <Box pb={1}>
                <Text variant="h6">{echo('news-title')}</Text>
              </Box>
              <Box px={1} pb={3}>
                <Grid container spacing={0.5}>
                  <Grid item xs={12} md={6}>
                    <Text
                      link={{
                        external: true,
                        href: 'https://medium.com/phantasticphantasma/phantasma-x-raze-network-cbc7452d9a58',
                      }}
                      truncate={{
                        len: 36,
                      }}
                      sx={{
                        textDecoration: 'none',
                        color: furyActive.palette.secondary.main,
                        fontWeight: 600,
                      }}
                    >
                      ● Phantasma X Raze Network
                    </Text>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Text
                      link={{
                        external: true,
                        href: 'https://medium.com/phantasticphantasma/poltergeist-2-0-adf58193a4e0',
                      }}
                      truncate={{
                        len: 36,
                      }}
                      sx={{
                        textDecoration: 'none',
                        color: furyActive.palette.secondary.main,
                        fontWeight: 600,
                      }}
                    >
                      ● Poltergeist 2.0
                    </Text>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Text
                      link={{
                        external: true,
                        href: 'https://medium.com/phantasticphantasma/steam-integration-through-pavillion-on-phantasma-chain-a35cb0b4bf6c',
                      }}
                      truncate={{
                        len: 36,
                      }}
                      sx={{
                        textDecoration: 'none',
                        color: furyActive.palette.secondary.main,
                        fontWeight: 600,
                      }}
                    >
                      ● Steam Integration through Pavillion on Phantasma Chain!
                    </Text>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Text
                      link={{
                        external: true,
                        href: 'https://medium.com/phantasticphantasma/phantasma-chain-x-aleph-im-dc74b44cc2a7',
                      }}
                      truncate={{
                        len: 36,
                      }}
                      sx={{
                        textDecoration: 'none',
                        color: furyActive.palette.secondary.main,
                        fontWeight: 600,
                      }}
                    >
                      ● Phantasma Chain X Aleph.im
                    </Text>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Text
                      link={{
                        external: true,
                        href: 'https://medium.com/phantasticphantasma/world-premiere-first-ever-cross-chain-nft-marketplace-364d446bf563',
                      }}
                      truncate={{
                        len: 36,
                      }}
                      sx={{
                        textDecoration: 'none',
                        color: furyActive.palette.secondary.main,
                        fontWeight: 600,
                      }}
                    >
                      ● World premiere: First ever cross-chain NFT marketplace!
                    </Text>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Text
                      link={{
                        external: true,
                        href: 'https://medium.com/phantasticphantasma/main-net-launch-affaff806020',
                      }}
                      truncate={{
                        len: 36,
                      }}
                      sx={{
                        textDecoration: 'none',
                        fontWeight: 600,
                        color: furyActive.palette.secondary.main,
                      }}
                    >
                      ● Main Net Launch!
                    </Text>
                  </Grid>
                </Grid>
              </Box>
              <MuiLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/phantasticphantasma"
              >
                <Button variant="contained" color="secondary">
                  {echo('btn-blog')}
                </Button>
              </MuiLink>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper sx={{ minHeight: '201px' }}>
            <Box p={3} textAlign="center">
              <NextLink href="/nexus" passHref>
                <MuiLink href="/nexus">
                  <Button variant="contained" color="secondary">
                    {echo('btn-nexus')}
                  </Button>
                </MuiLink>
              </NextLink>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ minHeight: '330px' }}>
            <Box p={3} textAlign="center">
              <Tooltip title={echo('wip')}>
                <Box display="inline-block">
                  <Button variant="contained" color="secondary" disabled>
                    {echo('btn-metrics')}
                  </Button>
                </Box>
              </Tooltip>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
