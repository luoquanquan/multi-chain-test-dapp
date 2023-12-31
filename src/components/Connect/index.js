import {
  Button, Card, Space,
} from 'antd';

export default function Connect({ handleConnect, account, children }) {
  const handleDisConnect = () => {
    okxwallet.disconnect();
  };

  return (
    <Card title="连接状态">
      <Space>
        {children}
        <Button type="primary" disabled={!!account} onClick={handleConnect}>连接钱包</Button>
        <Button danger disabled={!account} onClick={handleDisConnect}>断开连接</Button>
      </Space>
    </Card>
  );
}
