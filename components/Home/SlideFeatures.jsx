import Marquee from "react-fast-marquee";


const FeaturesSlide = () => {
    const features = [
"10% Reflection Reward In $BNB ",
"5% Reflection Reward In ScorpFin",
"Hyper-Deflation",
"2% Auto Buyback & Burn ScorpFin",
"3% Auto Growing Liquidity",
"Whale Proof ",
"Anti Bot",
"Anti-Dump",
    ];
    return (
<div className="flex justify-center ">
<Marquee
gradientColor={[21, 27, 40]}
speed={30}
>
   {
        features.map(ftr =>(
            <div
            key={ftr}
            className="flex mx-5 text-white font-bold py-5"
            >{ftr}
            <img src="/img/scorp.gif"
            className="ml-5"
            style={{height:"25px"}}
            alt="" />
            </div>
        ))
    }
 </Marquee>
</div>
       
    );
}
 
export default FeaturesSlide;