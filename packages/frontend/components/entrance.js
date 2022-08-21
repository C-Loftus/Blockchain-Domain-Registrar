import { useMoralis, useWeb3Contract } from "react-moralis";

import { abi, addresses } from "../constants";

export default function entrance(priceToPay){
    const {chainId: chainIdHex} = useMoralis();
    const chainId = parseInt(chainIdHex);
    const address = chainId in addresses ? addresses[chainId] : null;

    const { runContractFunction: register } = useWeb3Contract(
        {
            abi: abi,
            contractAddress: address,
            functionName: "register",
            params: {},
            msgValue: priceToPay,
        }
    );

}