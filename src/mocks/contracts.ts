export type Contract = {
  name: string;
  address: string;
  script?: string;
  abi?: string;
};

export type Contracts = {
  [x: string]: Contract;
};

export const contracts: Contracts = {
  main: {
    name: 'main',
    address: 'S3d7TbZxtNPdXy11hfmBLJLYn67gZTG2ibL7fJBcVdihWU4',
  },
  genesis: {
    name: 'genesis',
    address: 'genesis',
  },
  account: {
    name: 'account',
    address: 'S3dGz1deZweAiMVPHL328X3pVNpANQVjgX4MoRGpbNNAfrB',
    script:
      'https://github.com/phantasma-io/PhantasmaChain/blob/development/Phantasma.Blockchain/Contracts/AccountContract.cs',
    abi: `
Methods

RegisterName(target:Object, name:String): None
UnregisterName(target:Object): None
RegisterScript(target:Object, script:BytesabiBytes:Bytes): None
HasScript(address:Object): Bool
LookUpAddress(target:Object): String
LookUpScript(target:Object): Bytes
LookUpABI(target:Object): Bytes
LookUpName(name:String): Object
Migrate(from:Object, target:Object): None
    
Events
    
None.
    `,
  },
};
