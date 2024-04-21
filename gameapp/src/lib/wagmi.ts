import "wagmi/window";
import { createConfig, Chain  } from "wagmi";
import { createPublicClient, http } from "viem";
import { mainnet, polygon } from "viem/chains";
import { getDefaultConfig } from "connectkit";

const alchemyId = process.env.ALCHEMY_API_KEY;
const alchemyPolygonId = process.env.ALCHEMY_POLYGON_API_KEY;
const walletConnectProjectID = "6c37429d912cb97065107c0f849bc879";

const IPC: Chain = {
  id: 381277380063393, // Chain ID
  name: 'IPC',
  network: 'IPC',
  nativeCurrency: {
    name: 'FIL',
    symbol: 'FIL', // Currency Symbol
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['http://localhost:8545/'] } ,
    public: { http: ['http://localhost:8545/'] } // Include the public key if required by the Chain type
  },
  testnet: true,
};

const wagmiConfig = createConfig(
  getDefaultConfig({
    alchemyId,
    walletConnectProjectId: walletConnectProjectID,
    appName: "Survival",
    appDescription: "Isometric game. Build and Defence in the onchain crypto world",
    appUrl: "",
    appIcon: "",
    chains: [IPC]
    
  }),
);

const client = createPublicClient({
  chain: IPC,
  transport: http("http://localhost:8545/")
});

const polygonClient = createPublicClient({
  chain: polygon,
  transport: http("http://localhost:8545/")
})

export { client, polygonClient, wagmiConfig };
