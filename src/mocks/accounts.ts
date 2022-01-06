export type Balance = {
  logo: string;
  balance: string;
  token: string;
  value: number;
  chain: string;
};

export const balances: Balance[] = [
  {
    logo: '/static/v1/img/SOUL.png',
    balance: '2,950.00 SOUL',
    token: 'soul',
    value: 9056.5,
    chain: 'main',
  },
  {
    logo: '/static/v1/img/KCAL.png',
    balance: '49,018.00 KCAL',
    token: 'kcal',
    value: 7346.87,
    chain: 'main',
  },
];

export type Account = {
  address: string;
  type: string;
  name: string;
  stake?: number;
  unclaimed?: number;
  balances?: Balance[];
};

export type Accounts = {
  [x: string]: Account;
};

export const accounts: Accounts = {
  S3d7TbZxtNPdXy11hfmBLJLYn67gZTG2ibL7fJBcVdihWU4: {
    address: 'S3d7TbZxtNPdXy11hfmBLJLYn67gZTG2ibL7fJBcVdihWU4',
    type: 'System',
    name: 'main',
    balances,
  },
  genesis: {
    address: 'genesis',
    type: 'System',
    name: 'genesis',
    balances,
  },
  S3dGz1deZweAiMVPHL328X3pVNpANQVjgX4MoRGpbNNAfrB: {
    address: 'S3dGz1deZweAiMVPHL328X3pVNpANQVjgX4MoRGpbNNAfrB',
    type: 'System',
    name: 'account',
    balances,
  },
  S3dH4Ek14E5wWXvfmae6Wb4MHAmpGV36TnLE79V9MNod79V: {
    address: 'S3dH4Ek14E5wWXvfmae6Wb4MHAmpGV36TnLE79V9MNod79V',
    type: 'System',
    name: 'account',
    balances,
  },
};
