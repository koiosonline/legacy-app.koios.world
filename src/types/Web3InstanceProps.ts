import { AbiItem } from 'web3-utils';

export type Web3InstanceProps = {
  eth: { Contract: new (arg0: AbiItem[], arg1: string) => any };
};