
# BOOMFART

Welcome to your new project and to the internet computer development community. By default, creating a new project adds this README and some template files to your project directory. You can edit these template files to customize your project and to include your own code to speed up the development cycle.

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working with test, see the following documentation available online:

- [Quick Start](https://internetcomputer.org/docs/quickstart/quickstart-intro)
- [SDK Developer Tools](https://internetcomputer.org/docs/developers-guide/sdk-guide)
- [Rust Canister Devlopment Guide](https://internetcomputer.org/docs/rust-guide/rust-intro)
- [ic-cdk](https://docs.rs/ic-cdk)
- [ic-cdk-macros](https://docs.rs/ic-cdk-macros)
- [Candid Introduction](https://internetcomputer.org/docs/candid-guide/candid-intro)
- [JavaScript API Reference](https://erxue-5aaaa-aaaab-qaagq-cai.raw.icp0.io)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd test/
dfx help
dfx canister --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `production` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor
=======
![Group 5981 (1)](https://user-images.githubusercontent.com/73345016/144523306-f6041b24-bd34-4ecf-bc0f-6c96b0c24ca8.png)

## DIP20 - Introduction

Token standards are essential for the Internet Computer ecosystem, especially for the decentralized finance ecosystem (DeFi) system. In this token interface, we implemented an ERC-20 style token standard in both Motoko and Rust, the standard is named DIP20.

This standard allows for a common and familiar interface that not only provides a quick entry point for existing blockchain developers, but future interoperability options between the Internet Computer and Ethereum, through the process of sustaining the same shared interfaces.

You can find the interface descriptions in the [specification file](./spec.md).

[This branch](https://github.com/dfinance-tech/ic-token/tree/templates) contains code of several other token canister templates.


## Development

You need the latest DFINITY Canister SDK to be able to build and deploy a token canister:

```shell
sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

Navigate to a the sub directory and start a local development network:

```shell
cd motoko
dfx start --background
```

Create canisters:

```shell
dfx canister create --all
```

Install code for token canister:

```
dfx build

dfx canister install token --argument="(\"<LOGO>\", \"<NAME>\", \"<SYMBOL>\", <DECIMALS>, <TOTAL_SUPPLY>, <YOUR_PRINCIPAL_ID>, <FEE>)"
e.g.:
dfx canister install token --argument="(\"data:image/jpeg;base64,...\", \"DFinance Coin\", \"DFC\", 8, 10000000000000000, principal \"4qehi-lqyo6-afz4c-hwqwo-lubfi-4evgk-5vrn5-rldx2-lheha-xs7a4-gae\", 10000)"
```

Refer to `demo.sh` in the corresponding sub directory for more details.



## Contributing

We'd like to collaborate with the community to provide better token standard implementation for the developers on the IC, if you have some ideas you'd like to discuss, submit an issue, if you want to improve the code or you made a different implementation, make a pull request!

>>>>>>> afdd4f880de1b8ed53a9db4ab4fb7cc84c972bf2
