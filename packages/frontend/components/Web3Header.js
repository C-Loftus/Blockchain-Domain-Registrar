import { ConnectButton } from "@web3uikit/web3";

export default function Web3Header() {
    return (
        <div>
            <ConnectButton moralisAuth={false} />
        </div>
    )
}