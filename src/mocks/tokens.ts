export type Token = {
  id: string;
  logo: string;
  name: string;
  ticker: string;
  decimals: number;
  currentSupply: string;
  maxSupply?: string;
  price: string;
  transferable: boolean;
  fungibility: string;
  contract?: string;
};

export type Tokens = {
  [x: string]: Token;
};

export const tokens: Tokens = {
  soul: {
    id: 'soul',
    logo: '/static/v1/img/SOUL.png',
    name: 'Phantasma Stake',
    ticker: 'SOUL',
    price: '$3.40',
    currentSupply: '59.23M SOUL',
    decimals: 8,
    fungibility: 'Fungible',
    transferable: true,
    contract: 'S3dGz1deZweAiMVPHL328X3pVNpANQVjgX4MoRGpbNNAfrB',
  },
  kcal: {
    id: 'kcal',
    logo: '/static/v1/img/KCAL.png',
    name: 'Phantasma Energy',
    ticker: 'KCAL',
    price: '$0.15',
    currentSupply: '35.16M KCAL',
    decimals: 10,
    fungibility: 'Fungible',
    transferable: true,
    contract: 'S3dGz1deZweAiMVPHL328X3pVNpANQVjgX4MoRGpbNNAfrB',
  },
};
