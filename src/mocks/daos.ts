import { Account } from './accounts';

export type Dao = {
  id: string;
  name: string;
  address: string;
  size: number;
  members?: Account[];
};

export const members: Account[] = [
  {
    address: 'S3d7TbZxtNPdXy11hfmBLJLYn67gZTG2ibL7fJBcVdihWU4',
    type: 'System',
    name: 'main',
  },
  {
    address: 'genesis',
    type: 'System',
    name: 'genesis',
  },
];

export type Daos = {
  [x: string]: Dao;
};

export const daos: Daos = {
  masters: {
    id: 'masters',
    name: 'Soul Masters',
    address: 'S3dH4Ek14E5wWXvfmae6Wb4MHAmpGV36TnLE79V9MNod79V',
    size: 2,
    members,
  },
  stakers: {
    id: 'stakers',
    name: 'Soul Stakers',
    address: 'S3dH4Ek14E5wWXvfmae6Wb4MHAmpGV36TnLE79V9MNod79V',
    size: 2,
    members,
  },
};

export const daosArr: Dao[] = Object.values(daos);
