import {Chain} from "@rainbow-me/rainbowkit"

const moonbaseChain: Chain = {
    id: 1287,
    name: "Moonbase Testnet",
    network: "Moonbase Testnet",
    nativeCurrency: {
        decimals: 18,
        name: 'DEV',
        symbol: "DEV"
    }, 
    rpcUrls: {
        default: "https://rpc.api.moonbase.moonbeam.network"
    },
    blockExplorers: {
        default: {name:'MoonScan', url: "https://moonbase.moonscan.io/"}
    },
    testnet: true
}
const avaxFujiChain: Chain = {
    id: 43_113,
    name: "Avalanche Fuji",
    network: "Avalanche Fuji Testnet",
    nativeCurrency: {
        decimals: 18,
        name: 'Avalanche',
        symbol: "Avax"
    }, 
    rpcUrls: {
        default: "https://api.avax-test.network/ext/bc/C/rpc"
    },
    blockExplorers: {
        default: {name:'SnowTrace', url: "https://testnet.snowtrace.io"}
    },
    testnet: true
}
const ftmTestChain: Chain = {
    id: 4002,
    name: "Fantom Testnet",
    network: "Fantom Testnet",
    nativeCurrency: {
        decimals: 18,
        name: 'Test Fantom',
        symbol: "FTM"
    }, 
    rpcUrls: {
        default: "https://rpc.testnet.fantom.network/"
    },
    blockExplorers: {
        default: {name:'FtmScan', url: "https://testnet.ftmscan.com/"}
    },
    testnet: true
}
const cronosTestChain: Chain = {
    id: 338,
    name: "Cronos Testnet",
    network: "Cronos Testnet",
    nativeCurrency: {
        decimals: 18,
        name: 'Test Cronos',
        symbol: "tCronos"
    }, 
    rpcUrls: {
        default: "https://evm-t3.cronos.org"
    },
    blockExplorers: {
        default: {name:'CronosScan', url: "https://testnet.cronoscan.com"}
    },
    testnet: true
}
const milkomedaTestChain: Chain = {
    id: 200_101,
    name: "Milkomeda Testnet",
    network: "Milkomeda Testnet",
    nativeCurrency: {
        decimals: 18,
        name: 'Milkomeda Test Ada',
        symbol: "mTADA"
    }, 
    rpcUrls: {
        default: "https://rpc-devnet-cardano-evm.c1.milkomeda.com"
    },
    blockExplorers: {
        default: {name:'BlockScout', url: "https://explorer-devnet-cardano-evm.c1.milkomeda.com"}
    },
    testnet: true
}
const bnbTestChain: Chain = {
    id: 97,
    name: "BNBChain Testnet",
    network: "BNBChain Testnet",
    nativeCurrency: {
        decimals: 18,
        name: 'Test BNB',
        symbol: "tBNB"
    }, 
    rpcUrls: {
        default: "https://data-seed-prebsc-1-s1.binance.org:8545/"
    },
    blockExplorers: {
        default: {name:'BscScan', url: "https://testnet.bscscan.com/"}
    },
    testnet: true
}

export {moonbaseChain, avaxFujiChain, ftmTestChain, cronosTestChain, milkomedaTestChain, bnbTestChain}