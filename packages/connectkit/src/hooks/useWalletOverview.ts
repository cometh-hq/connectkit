import { useAccount } from 'wagmi';
import { isComethWalletConnector } from '../utils';

export function useWalletOverview() {
  const { connector } = useAccount();

  const openUrl = () => {
    if (connector && isComethWalletConnector(connector.id)) {
      const config = (connector as any)?.getConfig?.();
      window.open(
        config?.configuration?.oidcAppURI || 'https://wallet.cometh.io',
        '_blank'
      );
    }
  };

  return {
    openUrl,
  };
}
