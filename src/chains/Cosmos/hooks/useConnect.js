import { message } from 'antd';
import { useEffect, useState } from 'react';

export default () => {
  // 连接钱包
  const [account, setAccount] = useState('');

  const handleConnect = async () => {
    try {
      await okxwallet.keplr.enable('cosmoshub-4');
      const { name } = await okxwallet.keplr.connect();
      setAccount(name);
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    okxwallet.on('walletChanged', ([connected]) => {
      if (connected) {
        handleConnect();
      } else {
        setAccount('');
      }
    });
  }, []);

  return { account, handleConnect };
};
