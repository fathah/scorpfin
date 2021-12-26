import Lottie from "lottie-react";
import buy from "@/assets/buy.json";
import {FaCopy} from 'react-icons/fa';
import {AiOutlineCopy} from 'react-icons/ai';
import copy from 'copy-to-clipboard';

const BuyNow = () => {

const contract = "0x475c8df9860e42605d9917f0a2e522cc861cbf82";
    function copyContract() {
        copy(contract);

        var snack = document.getElementById("snack");
        snack.style.display = "flex";

        setTimeout(function(){
            snack.style.display = "none";
        }, 3000);

      }



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
    <h1 className="text-white font-bold text-xl text-center lg:text-3xl mb-2  mt-4">
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
    </div>
    <br />
    <br />
    <center>
    Contract Address: 
    <div className="flex items-center cursor-pointer"
    onClick={()=>copyContract()}
    >
    <b className="gr-text text-xs lg:text-lg"
    
    >{contract}</b> <AiOutlineCopy className="ml-1"/>
    </div>
    </center>
    </div>
    </div>
   <section className="fixed items-center bottom-0 right-0 left-0 
   bg-green-600 text-white py-4 px-5 z-50"
   id="snack"
   style={{display: "none"}}
   >
      <FaCopy className="mr-1"/> Contract Address Copied!
   </section>
</div>

    );
}
 
export default BuyNow;