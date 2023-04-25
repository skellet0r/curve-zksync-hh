import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@nomiclabs/hardhat-vyper";
import "@matterlabs/hardhat-zksync-vyper";

module.exports = {
    zksolc: {
        version: "1.3.8",
        compilerSource: "binary",
        settings: {},
    },
    defaultNetwork: "zkSyncTestnet",

    networks: {
        zkSyncTestnet: {
            url: "https://testnet.era.zksync.dev",
            ethNetwork: "https://rpc.ankr.com/eth_goerli",
            zksync: true,
        },
    },
    solidity: {
        version: "0.8.8",
    },
    zkvyper: {
        version: "1.3.4",
        compilerSource: "binary",  // binary or docker
        settings: {
            compilerPath: "/home/user/.cache/zkvvm/zkvyper-1.3.4",  // ignored for compilerSource: "docker"
        }
    }
};
