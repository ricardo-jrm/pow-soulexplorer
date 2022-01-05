import React from 'react';
import { Text } from '../Text';
import { NavTabs, NavTabRecord } from '../NavTabs';

const Tab1 = () => <>TAB 1</>;
const Tab2 = () => <>TAB 2</>;

const tempTabs: NavTabRecord = {
  tab1: {
    id: 'tab1',
    label: 'Tab 1',
    href: '/nexus',
    component: <Tab1 />,
  },
  tab2: {
    id: 'tab2',
    label: 'Tab 2',
    href: '/nexus',
    component: <Tab2 />,
  },
};

export const TempNav = () => {
  return (
    <div>
      <Text
        link={{
          href: '/account',
        }}
      >
        Account
      </Text>
      <Text
        link={{
          href: '/block',
        }}
      >
        Block
      </Text>
      <Text
        link={{
          href: '/chain',
        }}
      >
        Chain
      </Text>
      <Text
        link={{
          href: '/contract',
        }}
      >
        Contract
      </Text>
      <Text
        link={{
          href: '/dao',
        }}
      >
        DAO
      </Text>
      <Text
        link={{
          href: '/nexus',
        }}
      >
        Nexus
      </Text>
      <Text
        link={{
          href: '/token',
        }}
      >
        Token
      </Text>
      <Text
        link={{
          href: '/transaction',
        }}
      >
        tx
      </Text>
      <div>
        <NavTabs tabs={tempTabs} tabsDefault="tab1" />
      </div>
    </div>
  );
};
