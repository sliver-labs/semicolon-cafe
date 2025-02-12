
## About

This utility is designed to help you generate a steady flow of transactions on your rollup to ensure it is functional.

## Dependencies

This script requires ts-node. If you don't have it installed, you can find installation instructions [here](https://www.npmjs.com/package/ts-node#installation).

## Assumptions

You have access to a private key that is funded on your rollup. If you do not have this, you can bridge funds from your rollups parent chain to your network.

## Setup

1. Modify `./index.ts` with:
   - RPC address of your rollup
   - Private key of your funded wallet
   - Recipient address for transactions

2. (Optional) Edit `./run.sh` to adjust the transaction interval
   - Default sleep interval is 250ms between transactions 

## Usage

From the transaction-generator directory, run the following command in your terminal:

```
./run.sh
```


