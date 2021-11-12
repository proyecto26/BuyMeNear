# BuyMeNear
==================

![BuyMeNear](docs/screenshots/Web%201920%20–%2012.png)

## [Smart Contract](contract/assembly/index.ts)

- **`yarn dev:deploy:contract`**:
```cmd
Starting deployment. Account id: dev-1636154918970-53430427681370, node: https://rpc.testnet.near.org, helper: https://helper.testnet.near.org, file: ./out/main.wasm
Transaction Id yuGRo7a9CitqgZX63n3UuQetGfcBy85gYqBnjhYpwHG
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/yuGRo7a9CitqgZX63n3UuQetGfcBy85gYqBnjhYpwHG
Done deploying to dev-1636154918970-53430427681370
```

- **`near view dev-1636154918970-53430427681370 getTotalDonations '{}'`**:
```cmd
View call: dev-1636154918970-53430427681370.getTotalDonations({})
0
```

- **`near call dev-1636154918970-53430427681370 updateUserProfile '{ "firstName": "Juan David", "lastName": "Nicholls Cardona", "shortBio": "Full-Stack Developer | Open Source Contributor", "bio": "I am an Open Source Contributor, Full-Stack Developer with a background in web, mobile and game development, having 9+ years of practice and leadership building interactive experiences.", "avatarUrl": "https://avatars.githubusercontent.com/u/2154886?v=4" }' --accountId jdnichollsc.testnet`**:
```cmd
Receipt: FP7xBCzVqe6q19xzmKoqjG3kU7VvCwicC7LCz3aTdDJ1
        Log [dev-1636154918970-53430427681370]: Updating user profile for account "jdnichollsc.testnet"
Transaction Id 4rhMcfTfKdSo3cwPBWv9hPM2jBFyCLfVFY6DREdr5DHA
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/4rhMcfTfKdSo3cwPBWv9hPM2jBFyCLfVFY6DREdr5DHA
{
  balance: '0',
  firstName: 'Juan David',
  lastName: 'Nicholls Cardona',
  shortBio: 'Full-Stack Developer | Open Source Contributor',
  bio: 'I am an Open Source Contributor, Full-Stack Developer with a background in web, mobile and game development, having 9+ years of practice and leadership building interactive experiences.',
  imageUrl: 'https://avatars.githubusercontent.com/u/2154886?v=4',
  createAt: '1636161737896764161',
  userId: 'jdnichollsc.testnet'
}
```

- **`near view dev-1636154918970-53430427681370 getUserAccounts '{}'`**
```cmd
View call: dev-1636154918970-53430427681370.getUserAccounts({})
[ 'jdnichollsc.testnet' ]
```

- **`near view dev-1636154918970-53430427681370 getUserProfile '{ "accountId": "jdnichollsc.testnet" }'`**
```cmd
View call: dev-1636154918970-53430427681370.getUserProfile({ "accountId": "jdnichollsc.testnet" })
{
  balance: '0',
  firstName: 'Juan David',
  lastName: 'Nicholls Cardona',
  shortBio: 'Full-Stack Developer | Open Source Contributor',
  bio: 'I am an Open Source Contributor, Full-Stack Developer with a background in web, mobile and game development, having 9+ years of practice and leadership building interactive experiences.',
  imageUrl: 'https://avatars.githubusercontent.com/u/2154886?v=4',
  createAt: '1636161737896764161',
  userId: 'jdnichollsc.testnet'
}
```

- **`near call dev-1636154918970-53430427681370 sendDonation '{ "accountId": "jdnichollsc.testnet", "amount": "200000000000000000000000" }' --accountId jdnichollsc.testnet`**:
```cmd
Scheduling a call: dev-1636154918970-53430427681370.sendDonation({ "accountId": "jdnichollsc.testnet", "amount": "200000000000000000000000" })
Receipts: hmd4SnN8Ck4EbQxg5XxoHu2YsjnhukLEGew8Jm6kRD3, DDysF1NDSctikKNNAxFYccjuJzcYP5bxcSNF1ZYkM6Cq
        Log [dev-1636154918970-53430427681370]: Transferring 200000000000000000000000 to jdnichollsc.testnet
        Log [dev-1636154918970-53430427681370]: Adding donation for account "jdnichollsc.testnet"
Transaction Id BK6PdBb15DmSFWnvJ3WRV2NmDeu3ADN9wjgeMfyGQmb7
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/BK6PdBb15DmSFWnvJ3WRV2NmDeu3ADN9wjgeMfyGQmb7
{
  refCode: 'BD-2658987258',
  amount: '400000000000000000000000',
  createAt: '1636163214246431911',
  createdBy: 'jdnichollsc.testnet'
}
```

- **`near view dev-1636154918970-53430427681370 getDonations '{ "accountId": "jdnichollsc.testnet" }'`**:
```cmd
View call: dev-1636154918970-53430427681370.getDonations({ "accountId": "jdnichollsc.testnet" })
[
  {
    refCode: 'BD-1891448315',
    amount: '200000000000000000000000',
    createAt: '1636163149456726356',
    createdBy: 'jdnichollsc.testnet'
  },
  {
    refCode: 'BD-2658987258',
    amount: '400000000000000000000000',
    createAt: '1636163214246431911',
    createdBy: 'jdnichollsc.testnet'
  }
]
```

This [React] app was initialized with [create-near-app]


Quick Start
===========

To run this project locally:

1. Prerequisites: Make sure you've installed [Node.js] ≥ 12
2. Install dependencies: `yarn install`
3. Run the local development server: `yarn dev` (see `package.json` for a
   full list of `scripts` you can run with `yarn`)

Now you'll have a local development environment backed by the NEAR TestNet!

Go ahead and play with the app and the code. As you make code changes, the app will automatically reload.


Exploring The Code
==================

1. The "backend" code lives in the `/contract` folder. See the README there for
   more info.
2. The frontend code lives in the `/src` folder. `/src/index.html` is a great
   place to start exploring. Note that it loads in `/src/index.js`, where you
   can learn how the frontend connects to the NEAR blockchain.
3. Tests: there are different kinds of tests for the frontend and the smart
   contract. See `contract/README` for info about how it's tested. The frontend
   code gets tested with [jest]. You can run both of these at once with `yarn
   run test`.


Deploy
======

Every smart contract in NEAR has its [own associated account][NEAR accounts]. When you run `yarn dev`, your smart contract gets deployed to the live NEAR TestNet with a throwaway account. When you're ready to make it permanent, here's how.


Step 0: Install near-cli (optional)
-------------------------------------

[near-cli] is a command line interface (CLI) for interacting with the NEAR blockchain. It was installed to the local `node_modules` folder when you ran `yarn install`, but for best ergonomics you may want to install it globally:

    yarn install --global near-cli

Or, if you'd rather use the locally-installed version, you can prefix all `near` commands with `npx`

Ensure that it's installed with `near --version` (or `npx near --version`)


Step 1: Create an account for the contract
------------------------------------------

Each account on NEAR can have at most one contract deployed to it. If you've already created an account such as `your-name.testnet`, you can deploy your contract to `BuyMeNear.your-name.testnet`. Assuming you've already created an account on [NEAR Wallet], here's how to create `BuyMeNear.your-name.testnet`:

1. Authorize NEAR CLI, following the commands it gives you:

      near login

2. Create a subaccount (replace `YOUR-NAME` below with your actual account name):

      near create-account BuyMeNear.YOUR-NAME.testnet --masterAccount YOUR-NAME.testnet


Step 2: set contract name in code
---------------------------------

Modify the line in `src/config.js` that sets the account name of the contract. Set it to the account id you used above.

    const CONTRACT_NAME = process.env.CONTRACT_NAME || 'BuyMeNear.YOUR-NAME.testnet'


Step 3: deploy!
---------------

One command:

    yarn deploy

As you can see in `package.json`, this does two things:

1. builds & deploys smart contract to NEAR TestNet
2. builds & deploys frontend code to GitHub using [gh-pages]. This will only work if the project already has a repository set up on GitHub. Feel free to modify the `deploy` script in `package.json` to deploy elsewhere.


Troubleshooting
===============

On Windows, if you're seeing an error containing `EPERM` it may be related to spaces in your path. Please see [this issue](https://github.com/zkat/npx/issues/209) for more details.


  [React]: https://reactjs.org/
  [create-near-app]: https://github.com/near/create-near-app
  [Node.js]: https://nodejs.org/en/download/package-manager/
  [jest]: https://jestjs.io/
  [NEAR accounts]: https://docs.near.org/docs/concepts/account
  [NEAR Wallet]: https://wallet.testnet.near.org/
  [near-cli]: https://github.com/near/near-cli
  [gh-pages]: https://github.com/tschaub/gh-pages
