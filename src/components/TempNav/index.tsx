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
          href: '/account?address=S3d7TbZxtNPdXy11hfmBLJLYn67gZTG2ibL7fJBcVdihWU4',
        }}
      >
        Account
      </Text>
      <Text
        link={{
          href: '/block?hash=9AD4C0C9602FBA780496D0569DDEF9FD64BA7FC6B1FB13CC35AD5CD6FA1C72C0',
        }}
      >
        Block
      </Text>
      <Text
        link={{
          href: '/chain?id=main',
        }}
      >
        Chain
      </Text>
      <Text
        link={{
          href: '/contract?name=account',
        }}
      >
        Contract
      </Text>
      <Text
        link={{
          href: '/dao?id=masters',
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
