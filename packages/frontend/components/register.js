import { abi, addresses } from "../constants";
import { useMoralis, useWeb3Contract } from "react-moralis";

export default function Register(domain) {
    
    const { data, error, runContractFunction, isFetching, isLoading } =
      useWeb3Contract({
        abi: abi,
        contractAddress: addresses,
        functionName: "register",
        params: {
          name: domain,
        },
        msgValue: 100,
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