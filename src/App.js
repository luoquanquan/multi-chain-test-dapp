import { Tabs } from 'antd';

import Evm from './chains/Evm';
import Tron from './chains/Tron';
import Solana from './chains/Solana';
import Aptos from './chains/Aptos';
import Sui from './chains/Sui';
import Stacks from './chains/Stacks';
import Starknet from './chains/Starknet';
import Cosmos from './chains/Cosmos';
import Bitcoin from './chains/Bitcoin';

const tabs = [
  Evm,
  Tron,
  Solana,
  Aptos,
  Cosmos,
  Sui,
  Bitcoin,
  Stacks,
  Starknet,
];

export default function App() {
  return (
    <div className="wrap">
      <Tabs defaultActiveKey="Evm" items={tabs} />
    </div>
  );
}
