import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import reward from "@/assets/reward.json";
import giveaway from "@/assets/giveaway.json";
import dapps from "@/assets/dapps.json";

const MainFeatures = () => {

const featureData = [
    {
        title: `Auto Dual Rewards`,
        body: "Scorpion Finance is the next iteration of a reflection token on the Binance Smart Chain (BSC), world's 4th and Europe's first. The unique double reward reflection will be 10% in BNB and 5% in ScorpFin token. Simply hold ScorpFin tokens and get paid, from every buy and sell. The rewards are auto-sent to your wallet every 60 minutes",
        sub:"(10% BNB & 5% Scorpfin)", lottie:reward
    },
    {
        title: "Scorpfin Giveaways",
        body: "Up to 320 million USD worth of ScorpFin tokens will be given away to holders! This is by far the world's first mega giveaway and the team at Scorpion Finance has decided to reward it's loyal holders handsomely."
,sub:" ",lottie:giveaway
    },
    {
        title: "5 Use Cases DApps",
        body: "We are proud to introduce our 2 out of the 5 use case DApps before our launch  Scorpfolio (Track any BSC wallets) and Scorpswap (AI swap with staking and farming). More to be revealed in coming days so stay connected and follow our various social media channels for the latest updates"
,sub:" ", lottie:dapps    },
];


    return (
        <div className="grid lg:grid-cols-3 p-10 xl:px-48 lg:px-32 mt-10 lg:mt-0">
            {
                featureData.map(item => (
                   
                    <SingleGrid key={item.title} 
                    title={item.title}
                    sub={item.sub}
                    body={item.body}
                    lottie={item.lottie}
                    delay={(featureData.indexOf(item)+2)*100}
                    />
                   
                ))
            }

        </div>
    );
}
 
export default MainFeatures;


export const SingleGrid = ({title, sub, body, lottie, delay}) => {
    return  <Tilt><div
    className="main-features-grid flex flex-col items-center p-6 rounded-md m-4"
    style={{
        minHeight:"380px"
    }}
    data-aos="fade-up"
    data-aos-delay={delay}
    >
        {lottie==reward?(
            <img src="/img/bnb.gif"  alt=""
            style={{ height:"100px" }}
            />
        ):(
            <Lottie animationData={lottie}
        style={{ height:"100px" }}
        />
        )}
        
<h1
className="gr-text font-bold text-xl mt-2 text-center"
>{title}</h1>
<h1
className="gr-text font-bold mb-2 text-center"
>{sub}</h1>
<p
className="text-sm text-justify"
>{body}</p>
    </div> </Tilt>
}