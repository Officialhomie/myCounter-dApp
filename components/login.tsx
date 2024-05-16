'use client'
import { ConnectButton } from "thirdweb/react";
import { client, chain } from "../utils/constants";
import { useActiveAccount } from "thirdweb/react";
import Counter from "../components/counter";



const Login: React.FC = () => {
    const account = useActiveAccount();

    return(
        <div className="flex flex-col items-center justify-center h-[100vh] border border-green-500">
            {account ? (
                
                <div className="text-center">
                    <ConnectButton client={client} chain={chain}
                    connectModal={{
                        size: "compact"
                    }}/>
                    <Counter/>
                </div>
                
                
            ) : (
                <div className="text-center">
                    <ConnectButton client={client} chain={chain}
                    connectModal={{
                        size: "compact"
                    }}/>
                </div>
            )}

        </div>
    )
};

export default Login;