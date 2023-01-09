import { useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect } from "react";
import { abi, addresses } from "../constants";



export default function ContractEntrance(priceToPay) {
    const { chainId, isWeb3Enabled, isInitializing } = useMoralis();

    async function GetPrice(chainId){
        const decimalChainId = parseInt(chainId);
        console.log(decimalChainId);
        const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const options = {
          address: address,
          function_name: "price",
          abi: abi,
          params: { name: "testdomain" },
        };
        const allowance = await useWeb3Contract(options);
        console.log(JSON.stringify(allowance));
    }

    return (
        <button onClick={() => GetPrice(chainId)}>
            Get Price
        </button>
    );

}