import { abi, addresses } from "../constants";
import { useMoralis, useWeb3Contract } from "react-moralis";

export default function Register(domain) {
    
    const { data, error, runContractFunction, isFetching, isLoading } =
      useWeb3Contract({
        abi: abi,
        contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        functionName: "price",
        params: {
          name: domain,
        },
        msgValue: 0,
      });
  
    return (
      <div>
        <button onClick={() => 
          runContractFunction("test")} 
          disabled={isFetching}>
          Register a domain
        </button>
          {console.log(data)}
      </div>
    );
  };