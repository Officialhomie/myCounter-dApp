import { useReadContract } from "thirdweb/react";
import { CONTRACT } from "../utils/constants"
import { TransactionButton } from "thirdweb/react";
import { prepareContractCall, toWei } from "thirdweb";



const Counter: React.FC = () => {
    const { data: count, isLoading: loadingCount, refetch } = useReadContract({
      contract: CONTRACT,
      method: "getCount",
    });

    return (
        <div className="mt-[50px] justify-center ">
            <h1>Homie's Counter</h1>
            {loadingCount ? (
                <h2>.....</h2>
            ) : (
                <h2 className="text-green-500 text-2xl font-bold">{count?.toString()}</h2>
            )}
            <div className="flex justify-center gap-[15px] mt-[15px]">
                <TransactionButton
                    transaction={() => prepareContractCall({
                        contract: CONTRACT, 
                        method: "decrement"
                    })}
                    onTransactionSent={() => console.log("decrementing...")}
                    onTransactionConfirmed={() => refetch()}
                    >
                    -
                </TransactionButton>
                <TransactionButton
                    transaction={() => prepareContractCall({
                        contract: CONTRACT, 
                        method: "increment"
                    }) }
                    onTransactionSent={() => console.log("incrementing...")}
                    onTransactionConfirmed={() => refetch()}
                    >
                    +
                </TransactionButton>
            </div>
        </div>
        
    )
}; 

export default Counter; 


