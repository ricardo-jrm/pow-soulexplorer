export type Account = {
  address: string;
  type: string;
  name: string;
  stake?: number;
  unclaimed?: number;
};

export type Accounts = {
  [x: string]: Account;
};

export const accounts: Accounts = {
  S3d7TbZxtNPdXy11hfmBLJLYn67gZTG2ibL7fJBcVdihWU4: {
    address: 'S3d7TbZxtNPdXy11hfmBLJLYn67gZTG2ibL7fJBcVdihWU4',
    type: 'System',
    name: 'main',
  },
};
