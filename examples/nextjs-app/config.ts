import { getDefaultConfig } from 'connectkit';
import { createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';

export const config = createConfig(
  getDefaultConfig({
    appName: 'ConnectKit Next.js demo',
    chains: [optimism, arbitrum, mainnet, polygon],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    // comethWalletPreference: {
    //   configuration: {
    //     oidcAppURI: 'http://localhost:3000',
    //   },
    // },
  })
);

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}
