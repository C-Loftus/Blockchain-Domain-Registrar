import { useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect } from "react";
import { abi, addresses } from "../constants";

async function getPrice(chainId){
        const decimalChainId = parseInt(chainId);
        console.log(decimalChainId);
        const address = addresses[decimalChainId][0];

        const options = {
          address: address,
          function_name: "price",
          abi: abi,
          params: { name: "testdomain" },
        };
        const allowance = await useWeb3Contract(options);
        console.log(JSON.stringify(allowance));
}

export default function ContractEntrance(priceToPay) {
    const { chainId, isWeb3Enabled, isInitializing } = useMoralis();
    return (
        <button onClick={() => getPrice(chainId)}>
            Get Price
        </button>
    );

}