export type Chain = {
  id: string;
  name: string;
  address: string;
  blockHeight: number;
  lastblock: string;
  parentChain?: string;
};

export type Chains = {
  [x: string]: Chain;
};

export const chains: Chains = {
  main: {
    id: 'main',
    name: 'main',
    address: 'S3d7TbZxtNPdXy11hfmBLJLYn67gZTG2ibL7fJBcVdihWU4',
    blockHeight: 348127,
    lastblock:
      '9AD4C0C9602FBA780496D0569DDEF9FD64BA7FC6B1FB13CC35AD5CD6FA1C72C0',
  },
};
