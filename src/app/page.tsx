import Login from "../../components/login";
// import Counter from "../../components/counter";

export default function Home() {
  return (
    // <div className="absolute top-0 left-0 sm:top-1/2 sm:left-auto sm:right-0 lg:top-0 lg:right-0 text-green-500 text-5xl">
    //   <Login/>
    // </div>
    <>
      <div className="flex itmes-center justify-between gap-[50px] p-[20px] w-full">
        <h1 className="text-[30px] md:text-[35px] lg:text-5xl font-bold text-green-500">OneTrueHomie's</h1>
        <div className="">
          <Login/>
        </div>
      </div>
    
      <h1 className="text-2xl font-medium">Please connect wallet to interact</h1>
    </>
  )
};

