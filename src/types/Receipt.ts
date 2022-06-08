export type Receipt = {
  blockHash: string;
  blockNumber: number;
  contractAddress: null;
  cumulativeGasUsed: number;
  effectiveGasPrice: string;
  from: string;
  gasUsed: number;
  logsBloom: string;
  status: boolean;
  to: string;
  transactionHash: string;
  transactionIndex: number;
  type: string;
  events: Events;
}

export type Events = {
  Transfer: Transfer[];
}

export type Transfer = {
  address: string;
  blockHash: string;
  blockNumber: number;
  logIndex: number;
  removed: boolean;
  transactionHash: string;
  transactionIndex: number;
  id: string;
  returnValues: ReturnValues;
  event: string;
  signature: string;
  raw: Raw;
}

export type Raw = {
  data: string;
  topics: string[];
}

export type ReturnValues = {
  "0": string;
  "1": string;
  "2": string;
  from: string;
  to: string;
  tokenId: string;
}
