import React, { useMemo, useCallback } from 'react';
import { useRouter } from 'next/router';
import {
  Button,
  Box,
  Grid,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
} from '@ricardo-jrm/fury/dist/mui';
import { useFury } from '@ricardo-jrm/fury';
import { usePain } from '@ricardo-jrm/pain';
import { useEcho } from '@ricardo-jrm/echo';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Text } from '../Text';
import { Image } from '../Image';

/**
 * Header props
 */
export interface HeaderProps {
  /**
   * Element height
   */
  height: number;
}

/**
 * Header
 */
export const Header = ({ height }: HeaderProps) => {
  const { push } = useRouter();
  const { furyActive, furyActiveId, furySetById } = useFury();
  const { echo, echoActiveId, echoSetById } = useEcho();
  const { painActive, painSetById } = usePain();

  const isDark = useMemo(() => furyActiveId.includes('-dark'), [furyActiveId]);

  const toggleDarkMode = useCallback(() => {
    if (isDark) {
      furySetById(furyActiveId.split('-')[0]);
    } else {
      furySetById(`${furyActiveId}-dark`);
    }
  }, [isDark, furyActiveId, furySetById]);

  return (
    <Box
      px={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
      }}
      sx={{ background: 'transparent' }}
    >
      <Grid container sx={{ height: `${height}px` }} alignItems="center">
        <Grid item xs>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Box pt={1}>
                <Tooltip title={echo('tooltip-nav-homepage')}>
                  <Box>
                    <Image
                      src={painActive.logo as string}
                      height="24px"
                      onClick={() => push('/')}
                      style={{
                        cursor: 'pointer',
                      }}
                    />
                  </Box>
                </Tooltip>
              </Box>
            </Grid>
            <Grid item>
              <Tooltip title={echo('tooltip-nav-homepage')}>
                <Box>
                  <Text
                    variant="h5"
                    onClick={() => push('/')}
                    sx={{
                      color: '#fff',
                      cursor: 'pointer',
                      fontWeight: 600,
                    }}
                  >
                    {painActive.name}
                  </Text>
                </Box>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title={echo('tooltip-brand')}>
                <Button size="small" sx={{ minWidth: '30px' }}>
                  <KeyboardArrowDownIcon
                    sx={{
                      fontSize: furyActive.typography.h5.fontSize,
                      color: '#fff',
                    }}
                  />
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <Box textAlign="right">
            <Box display="inline-block" pr={1.5}>
              <Tooltip title={echo('tooltip-search')}>
                <IconButton size="small">
                  <SearchIcon
                    sx={{
                      fontSize: furyActive.typography.h5.fontSize,
                      color: '#fff',
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
            <Box display="inline-block" pr={1.5}>
              <Tooltip title={echo('tooltip-darkmode')}>
                <IconButton size="small" onClick={toggleDarkMode}>
                  {isDark ? (
                    <Brightness4Icon
                      sx={{
                        fontSize: furyActive.typography.h5.fontSize,
                        color: '#fff',
                      }}
                    />
                  ) : (
                    <DarkModeIcon
                      sx={{
                        fontSize: furyActive.typography.h5.fontSize,
                        color: '#fff',
                      }}
                    />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
            <Box display="inline-block">
              <Tooltip title={echo('tooltip-locale')}>
                <Button
                  size="small"
                  sx={{
                    fontSize: furyActive.typography.body1.fontSize,
                    color: '#fff',
                  }}
                >
                  {echoActiveId === 'en' && 'English'}
                  {echoActiveId === 'pt' && 'Português'}
                  {echoActiveId === 'de' && 'Deutsch'}
                  {echoActiveId === 'fr' && 'Français'}
                </Button>
              </Tooltip>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
