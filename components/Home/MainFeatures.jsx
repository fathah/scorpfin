import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import reward from "@/assets/reward.json";
import giveaway from "@/assets/giveaway.json";
import dapps from "@/assets/dapps.json";

const MainFeatures = () => {

const featureData = [
    {
        title: "Auto Dual Rewards",
        body: "Scorpion Finance is the next iteration of a reflection token on the Binance Smart Chain (BSC), world's 4th and Europe's first. The unique double reward reflection will be 10% in BNB and 5% in ScorpFin token. Simply hold ScorpFin tokens and get paid, from every buy and sell to your wallet every 60 minutes",
        lottie:reward
    },
    {
        title: "Scorpion Fin Giveaways",
        body: "Up to 390 million USD worth of ScorpFin tokens will be given away to holders! This is by far the world's first mega giveaway and the team at Scorpion Finance has decided to reward it's loyal holders handsomely."
,lottie:giveaway
    },
    {
        title: "4 Use Cases Dapps",
        body: "We are proud to introduce our 2 use case Dapps before our launch  Scorpfolio (Track and BSC wallets ) and Scorpswap (AI swap with staking and farming). More to be revealed in coming days so stay connected and follow our various social media channels for the latest updates"
,lottie:dapps    },
];


    return (
        <div className="grid lg:grid-cols-3 p-10 xl:px-48 lg:px-32 mt-10 lg:mt-0">
            {
                featureData.map(item => (
                   
                    <SingleGrid key={item.title} 
                    title={item.title}
                    body={item.body}
                    lottie={item.lottie}
                    />
                   
                ))
            }

        </div>
    );
}
 
export default MainFeatures;


export const SingleGrid = ({title, body, lottie}) => {
    return  <Tilt><div
    className="main-features-grid flex flex-col items-center p-6 rounded-md m-4"
    style={{
        minHeight:"350px"
    }}
    >
        <Lottie animationData={lottie}
        style={{ height:"100px" }}
        />
<h1
className="gr-text font-bold text-xl my-2"
>{title}</h1>
<p
className="text-sm text-justify"
>{body}</p>
    </div> </Tilt>
}