import { ethers } from "ethers";
(async () => {
    const provider = new ethers.JsonRpcProvider('YOUR_ROLLUPS_RPC_URL');
    const signer = new ethers.Wallet('FUNDED_PRIVATE_KEY_ON_YOUR_ROLLUP', provider);

    const tx = await signer.sendTransaction({
        to: 'RECIPIENT_ADDRESS',
        value: ethers.parseUnits('1', 'wei'),
        gasPrice: ethers.parseUnits('1', 'gwei'),
        gasLimit: 24000,
    });
    console.log(tx);
})();
