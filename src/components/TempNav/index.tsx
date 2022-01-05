import React from 'react';
import { Text } from '../Text';

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
    </div>
  );
};
