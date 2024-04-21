# Survival
 

  
<h1 align="center">
  <br>
  <a href=""><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpP08WXrpiC7unhN0oDo8qp_DUua5vDX9MPHLrMF54imsowsaIu3-deazJ3TBUkHFTjEGJc6MGm6QA7aftuWdffOVzOug4gBpEacGKm6ACAkXoPFXQPzXedJmZwyj8XlXrBfaHR0yRUr-fYlqk5nAXJGx4m4fSffogKzWsnomYyWqL0-9B0xzh8NqtDW8/s960/our%20Goal.png" width="300"></a>
  <br>
  Project Survival 
  <br>
</h1>

<h4 align="center">Survive Waves, Level Up, Conquer Foes - All with Your NFT!</h4>

<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#struggles">Struggles</a> •
  <a href="#local-deployment">Local deployment</a> •
  <a href="#smart-contracts-deployments">smart contracts deployments</a> •
  <a href="#limitations">limitations </a> •
  <a href="#license">License</a>
</p>

![screenshot](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieZPalAwowt-sB2JqWU8IjnFUfnx8I-shXaq03tyJWBSq5JoFikYlz38_YZPlUf99c4Sg2x30ZJdlSFAHkkMib9KICO8lJzeiFr4e3wFRB1Pg5vJfip0uRGzpgZx96RxnHoSW5Hx2M0lUXX1gUXv6YO4-NMEUGfvAwp6j2smnrFYYbdw90npaDPwfXZwQ/s1000/Untitled-1-Recovered.png)

## Introduction 

[IPC](https://docs.ipc.space/) is super fast which makes it suitable for gaming , the idea of Survival project is to be able to survive waves of enemey and level up your NFT, not only that but it can be upgraded without even needing to pause the game and wait for tx to complete between waves or mid waves. 

## Struggles

Struggles of working with IPC for Project Survival :

1. **Reading smart contract Data:** one major pain points was trying to get wagmi to play nicely IPC and read data from smart contracts deployed that. and that super needed to allow the users to mint the nft , use it, then level it up in the marketplace during game play. 

2. **modifying the IPC:** we wanted to custmize the IPC to store the gamelogic and help with that while it wasnt yet finished for the hackathon we are in love with the potential 


## Local deployment

1. **Deploy IPC node:** you can follow this guide here [Deploy a subnet](https://docs.ipc.space/quickstarts/deploy-a-subnet)

2. **Deploy Contract** in the contract directory deploy the contract to subnet node using [remix](https://remix.ethereum.org/)

3. **NFT APP** in the NFTAPP directory do the following

a. install dep

  ```bash
      npm i
  ```

b. add the IPC infomation in network directory `nftapp\utils\networks.json`

  ```json
  {
    "selectedChain": "381277380063393",
    "381277380063393": {
      "chainId": "381277380063393",
      "chainName": "IPC",
      "rpcUrls": [
        "http://localhost:8545/"
      ],
      "nativeCurrency": {
        "symbol": "FIL"
      },
      "blockExplorerUrls": [
        ""
      ]
    }
  }
  ```
c. update the contract address  
d. run the nft app 

```bash
npm run dev
```

  
4. **deploy game app** in the gameapp directory do the following

a. install dep

  ```bash
  npm i
  ```

b. add the IPC chain ID in the `src\lib\wagmi.ts`

```js
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
  ```
  c. update the contract address  in `src\lib\wawa.ts`
    
  d. run the nft app 

```bash
npm run dev
```
b. run the app 

```bash
npm run start
```


## smart contracts deployments 

IPC is also deployed on the Arbiturm Blockchain 

SubnetRegistry : [0xaC0809e81d84d9f9b4a9d05C71A8D89CAa3561DB](https://sepolia.arbiscan.io/address/0xaC0809e81d84d9f9b4a9d05C71A8D89CAa3561DB) 


Gateway : [0xBFb1288b4Bb316c9A4E431c3D73aB38c508023D5](https://sepolia.arbiscan.io/address/0xBFb1288b4Bb316c9A4E431c3D73aB38c508023D5) 



## License

MIT
