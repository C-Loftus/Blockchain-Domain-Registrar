import Head from "next/head";
import styles from "../styles/Home.module.css";
import Web3Header from "../components/Web3Header";
import { useMoralis } from "react-moralis";

const supportedChains = ["80001"];

export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis();

  return (
    <div className={styles.container}>

      <Web3Header />
      {isWeb3Enabled ? (
        <div>
          {supportedChains.includes(parseInt(chainId).toString()) ? (
            <div className="flex flex-row">
              {/* <LotteryEntrance className="p-8" /> */}
            </div>
          ) : (
            <div>{`You are on chain: ${parseInt(chainId)}. Please switch to the Polygon Mumbai Testnet at chainId: 80001`}</div>
          )}
        </div>
      ) : (
        <div>Please connect to a Wallet</div>
      )}
    </div>
  );
}