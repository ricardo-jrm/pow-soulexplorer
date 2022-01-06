export type Block = {
  hash: string;
  date: Date;
  chain: string;
  prevHash?: string;
  blockHeight: number;
  transactions: number;
  validator: string;
  fees: string;
};

export type Blocks = {
  [x: string]: Block;
};

export const blocks: Blocks = {
  '9AD4C0C9602FBA780496D0569DDEF9FD64BA7FC6B1FB13CC35AD5CD6FA1C72C0': {
    date: new Date('January 5, 2022 07:11:36'),
    hash: '9AD4C0C9602FBA780496D0569DDEF9FD64BA7FC6B1FB13CC35AD5CD6FA1C72C0',
    chain: 'main',
    prevHash:
      '6B66C26B3CFC1E75460F86C41557D12B0B83E57A06D839568B75F8886140B823',
    blockHeight: 348127,
    transactions: 69,
    validator: 'genesis',
    fees: 'genesis',
  },
  '6B66C26B3CFC1E75460F86C41557D12B0B83E57A06D839568B75F8886140B823': {
    date: new Date('January 5, 2022 07:10:30'),
    hash: '6B66C26B3CFC1E75460F86C41557D12B0B83E57A06D839568B75F8886140B823',
    chain: 'main',
    prevHash:
      '73B7E6987BCF7E1C1698231FDA9320E5C5B66118E1C4C3D52727CFEA5BFC8483',
    blockHeight: 348126,
    transactions: 420,
    validator: 'genesis',
    fees: 'genesis',
  },
  '73B7E6987BCF7E1C1698231FDA9320E5C5B66118E1C4C3D52727CFEA5BFC8483': {
    date: new Date('January 5, 2022 07:09:33'),
    hash: '73B7E6987BCF7E1C1698231FDA9320E5C5B66118E1C4C3D52727CFEA5BFC8483',
    chain: 'main',
    // prevHash:
    //   '5FEB072EBFC72257716D302C07696F78D13BCFA47E864ED40AD6B502953D0A36',
    blockHeight: 348125,
    transactions: 1337,
    validator: 'genesis',
    fees: 'genesis',
  },
};

export const blocksArr: Block[] = Object.values(blocks);
