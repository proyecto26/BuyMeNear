BuyMeNear Smart Contract
==================

A [smart contract] written in [AssemblyScript] for an app initialized with [create-near-app]


Quick Start
===========

Before you compile this code, you will need to install [Node.js] ≥ 12


Exploring The Code
==================

1. The main smart contract code lives in `assembly/index.ts`. You can compile
   it with the `./compile` script.
2. Tests: You can run smart contract tests with the `./test` script. This runs
   standard AssemblyScript tests using [as-pect].


  [smart contract]: https://docs.near.org/docs/develop/contracts/overview
  [AssemblyScript]: https://www.assemblyscript.org/
  [create-near-app]: https://github.com/near/create-near-app
  [Node.js]: https://nodejs.org/en/download/package-manager/
  [as-pect]: https://www.npmjs.com/package/@as-pect/cli


Advanced Topics
==================
1. [Class ContractPromiseBatch](https://near.github.io/near-sdk-as/classes/_sdk_core_assembly_promise_.contractpromisebatch.html)
2. [Orientation to Cross-contract Calls](https://github.com/near-examples/cross-contract-calls/tree/main/contracts/00.orientation)
