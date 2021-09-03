import Lottie from "lottie-react";
import buy from "@/assets/buy.json";

const BuyNow = () => {
    return (
<div className="p-10 xl:px-48 lg:px-32 py-20"
style={{
    background: "linear-gradient(153deg, rgba(42,49,62,1) 35%, rgba(35,39,47,1) 92%)"

}}
>
 <br />
    <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start">
    <div className="lg:w-6/12">
    <Lottie animationData={buy} className="w-10/12"/>
    </div>
    <div>
    <h1 className="text-white font-bold text-xl text-center lg:text-3xl mb-2  mt-4" data-aos="zoom-in">
    BUY SCORPFIN</h1>

    
    <div className="flex justify-center items-center mt-3">
        <a
        href="https://exchange.scorpion-finance.com"
        className="bg-yellow-500 hover:bg-yellow-600 rounded px-4 py-3 text-black font-bold cursor-pointer"
        target="_blank"
        rel="noreferrer"
        >ScorpSwap</a> <br />
        <a
        href="https://exchange.pancakeswap.com/"
        className="bg-yellow-800 hover:bg-yellow-900 rounded px-4 py-3 text-white font-bold ml-4 cursor-pointer"
        target="_blank"
        rel="noreferrer"
        >PancakeSwap</a>
    </div></div>
    </div>
</div>

    );
}
 
export default BuyNow;