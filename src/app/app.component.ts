import { Component } from '@angular/core';
import {
  createConfig,
  configureChains,
  mainnet,
} from '@wagmi/core'
import { publicProvider } from '@wagmi/core/providers/public'
import { connect, fetchEnsName } from '@wagmi/core'
import { InjectedConnector } from '@wagmi/core/connectors/injected'
// import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'
import { CoinbaseWalletConnector } from '@wagmi/core/connectors/coinbaseWallet'
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'okx-wallet';
  connectors: any;

  async ngOnInit() {

    // API key for Ethereum node
    // Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
    const infuraId = 'ed0c73adab6649cea145fedb02feda15';
    const { chains, publicClient, webSocketPublicClient } = configureChains(
      [mainnet],
      [publicProvider()],
    )

    const config = createConfig({
      publicClient,
    })


    this.connectors = [
      new CoinbaseWalletConnector({
        options: {
          appName: 'wagmi.sh',
          jsonRpcUrl: 'https://mainnet.infura.io/v3/ed0c73adab6649cea145fedb02feda15',
        },
      }),
      new WalletConnectConnector({
        options: {
          projectId: '5c2ca0dd3003fb371acdb8442a626a0c',
        },
      }),
      // new MetaMaskConnector({
      //   chains,
      // }),
      new InjectedConnector({
        options: {
          name: 'MetaMask',
        },
      }),
    ];
    // const connector = new CoinbaseWalletConnector({
    //   options: {
    //     appName: 'wagmi.sh',
    //     jsonRpcUrl: 'https://mainnet.infura.io/v3/ed0c73adab6649cea145fedb02feda15',
    //   },
    // })
    const address = await connect({
      connector: this.connectors[1],
    })
  }

  //   // Set up wagmi config
  // const config: any = createConfig({
  //   autoConnect: true,
  //   connectors: [
  //     new WalletConnectConnector({
  //       chains,
  //       options: {
  //         in,
  //         qrcode: true,
  //       },
  //     }),
  //     new MetaMaskConnector({ chains }),
  //     new CoinbaseWalletConnector({
  //       chains,
  //       options: {
  //         appName: 'wagmi',
  //       },
  //     }),
  //     new InjectedConnector({
  //       chains,
  //       options: {
  //         name: 'Injected',
  //         shimDisconnect: true,
  //       },
  //     }),
  //   ],
  //   publicClient,
  //   webSocketPublicClient,
  // })


  // console.log('address', address);
  // const ensName = await fetchEnsName({ address })
}
