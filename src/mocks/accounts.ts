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
  genesis: {
    address: 'genesis',
    type: 'System',
    name: 'genesis',
  },
  S3dGz1deZweAiMVPHL328X3pVNpANQVjgX4MoRGpbNNAfrB: {
    address: 'S3dGz1deZweAiMVPHL328X3pVNpANQVjgX4MoRGpbNNAfrB',
    type: 'System',
    name: 'account',
  },
  S3dH4Ek14E5wWXvfmae6Wb4MHAmpGV36TnLE79V9MNod79V: {
    address: 'S3dH4Ek14E5wWXvfmae6Wb4MHAmpGV36TnLE79V9MNod79V',
    type: 'System',
    name: 'account',
  },
};
