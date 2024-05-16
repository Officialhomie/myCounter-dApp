import { useReadContract } from "thirdweb/react";
import { CONTRACT } from "../utils/constants"

const Counter: React.FC = () => {
    const { data: count, isLoading: loadingCount } = useReadContract({
      contract: CONTRACT,
      method: "getCount",
    });

    return (
        <div className="mt-[20px]">
            <h1>Counter MIXER</h1>
            <p>how many people are here?</p>
        </div>
    )
}; 

export default Counter; 


