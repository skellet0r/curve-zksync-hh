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
            url: "https://mainnet.era.zksync.io",
            ethNetwork: "https://eth.llamarpc.com",
            zksync: true,
        },
    },
    solidity: {
        version: "0.8.8",
    },
    zkvyper: {
        version: "1.3.13",
        compilerSource: "binary",  // binary or docker
        settings: {
            compilerPath: "/home/user/.cache/zkvvm/zkvyper-1.3.13",  // ignored for compilerSource: "docker"
        }
    }
};
