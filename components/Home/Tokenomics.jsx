import Lottie from "lottie-react";
import tokenomics from "@/assets/tokenomics.json";
import Tilt from 'react-parallax-tilt';

const Tokenomics = () => {



    return (

        <div className="lg:px-32 xl:px-48 py-10 p-10">
<div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start">
    <div className="lg:w-6/12">
    <Tilt><div
    className="main-features-grid flex flex-col items-center p-6 rounded-lg m-4"
    style={{
        minHeight:"350px"
    }}
    >
       

<h1 className="gr-text font-bold text-xl lg:text-2xl my-4" 
data-aos="zoom-in">
TOKENOMICS</h1>
<p
className="text-justify lg:text-xl"
>
<span className="gr-text">100 Billion</span>  Total Supply <br />
<span className="gr-text">63%</span> Token Sales  <br />
<span className="gr-text">10%</span> Ecosystem and community <br />
<span className="gr-text">8%</span>    Development, marketing and R&D) <br />
<span className="gr-text"> 4%</span>    Founders and Team <br />
<span className="gr-text">15%</span> Farming and staking <br />


  
</p>
    </div> </Tilt>
    
    
    </div>

    <div className="lg:w-6/12 hidden lg:flex justify-end ">
     <Lottie animationData={tokenomics} className="w-10/12"  />
    </div>
    </div>


        </div>
    );
}
 
export default Tokenomics;