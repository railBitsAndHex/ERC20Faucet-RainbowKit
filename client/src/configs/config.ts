import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { connectorsForWallets, wallet } from "@rainbow-me/rainbowkit";
import { alchemyProvider } from 'wagmi/providers/alchemy';
import {jsonRpcProvider} from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public';

import * as customChain from "./chains";

const ALCHEMY_API_KEY:string = process.env.REACT_APP_ALCHEMY_API_KEY!;
const {chains, provider} = configureChains(
    [chain.goerli, chain.polygonMumbai, chain.arbitrumRinkeby, customChain.moonbaseChain, customChain.avaxFujiChain, customChain.ftmTestChain, customChain.cronosTestChain, customChain.milkomedaTestChain, customChain.bnbTestChain],
    [alchemyProvider({alchemyId: ALCHEMY_API_KEY}),
    jsonRpcProvider({ rpc: chain => ({ http: chain.rpcUrls.default }) }), publicProvider()]
)

const connectors = connectorsForWallets([{
    groupName: "ERC20 Faucet",
    wallets:[wallet.metaMask({chains})]
}])

const wagmiClient = createClient({
    autoConnect: true, connectors, provider
})


export {wagmiClient, chains}


