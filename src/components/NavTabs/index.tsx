import React, { useCallback, useMemo, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Box, Paper, Tabs, Tab } from '@ricardo-jrm/fury/dist/mui';

export type NavTab = {
  id: string;
  label: string;
  href: string;
  component: ReactNode;
};

export type NavTabRecord = {
  [x: string]: NavTab;
};

/**
 * NavTabs props
 */
export interface NavTabsProps {
  tabs: NavTabRecord;
}

/**
 * NavTabs
 */
export const NavTabs = ({ tabs }: NavTabsProps) => {
  const { query, push } = useRouter();
  const activeTab = useMemo(() => query.tab || 'tab1', [query]);

  const changeTab = useCallback(
    (tab: string) => {
      push({
        pathname: '/nexus',
        query: {
          ...query,
          tab,
        },
      });
    },
    [push, query],
  );

  return (
    <Paper>
      <Box>
        <Tabs
          value={activeTab}
          textColor="secondary"
          indicatorColor="secondary"
        >
          {Object.values(tabs).map(({ label, id }: NavTab) => (
            <Tab
              label={label}
              key={`tab-${id}`}
              value={id}
              onClick={() => changeTab(id)}
            />
          ))}
        </Tabs>
      </Box>
      <Box pt={1.5} pb={3} px={3}>
        {Object.values(tabs).map(({ id, component }: NavTab) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <Box key={`panel-${id}`}>{activeTab === id && component()}</Box>
        ))}
      </Box>
    </Paper>
  );
};
