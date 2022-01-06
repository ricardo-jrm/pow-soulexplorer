import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useFury } from '@ricardo-jrm/fury';
import { Grid, Link, Box } from '@ricardo-jrm/fury/dist/mui';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Text } from '../Text';
import { Image } from '../Image';

/**
 * Footer props
 */
export interface FooterProps {
  /**
   * Element Height
   */
  height: number;
}

/**
 * Footer
 */
export const Footer = ({ height }: FooterProps) => {
  const { pathname } = useRouter();

  const { furyActive } = useFury();

  const isHome = useMemo(
    () => pathname === '/' || pathname === '/blankhome',
    [pathname],
  );

  return (
    <Box>
      <div
        style={{
          visibility: isHome ? 'hidden' : 'visible',
          position: 'absolute',
          bottom: `${height - 1}px`,
          left: 0,
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
          transform: 'rotate(180deg)',
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            position: 'relative',
            display: 'block',
            width: 'calc(100% + 1.3px)',
            height: '63px',
          }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill={furyActive.palette.primary.main}
          />
        </svg>
      </div>
      <Grid
        container
        sx={{
          height: `${height}px`,
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: isHome
            ? 'transparent'
            : furyActive.palette.primary.main,
        }}
        alignItems="center"
        alignContent="center"
        justifyItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            alignContent="center"
            justifyItems="center"
            justifyContent="center"
          >
            <Grid item pb={2} pt={1}>
              <Grid
                container
                alignItems="center"
                alignContent="center"
                justifyItems="center"
                justifyContent="center"
                spacing={{ xs: 0.75, md: 2 }}
              >
                <Grid item>
                  <Link
                    href="https://twitter.com/phantasmachain"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    <TwitterIcon
                      sx={{
                        fontSize: '42px',
                      }}
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://discord.com/invite/u7D74kH"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    <Image
                      src="/static/v1/img/discord.png"
                      height="42px"
                      responsive
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://www.reddit.com/r/phantasma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    <RedditIcon
                      sx={{
                        fontSize: '42px',
                      }}
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://github.com/Phantasma-io"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    <GitHubIcon
                      sx={{
                        fontSize: '42px',
                      }}
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://medium.com/phantasticphantasma"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    <Image
                      src="/static/v1/img/medium.png"
                      height="42px"
                      responsive
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://www.linkedin.com/company/phantasmachain/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    <LinkedInIcon
                      sx={{
                        fontSize: '42px',
                      }}
                    />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            alignContent="center"
            justifyItems="center"
            justifyContent="center"
          >
            <Grid item pb={1}>
              <Text
                align="center"
                link={{
                  href: 'https://github.com/ricardo-jrm/pow-soulexplorer',
                  external: true,
                }}
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                Phantasma Explorer v2.0.0
              </Text>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            alignContent="center"
            justifyItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Text
                align="center"
                link={{
                  href: 'https://phantasma.io/',
                  external: true,
                }}
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                Copyright © Phantasma Team 2021-2022
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
