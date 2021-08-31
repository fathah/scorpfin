const MainFeatures = () => {

const featureData = [
    {
        title: "Auto Dual Rewards",
        body: "Scorpion Finance is the next iteration of a reflection token on the Binance Smart Chain (BSC), world's 4th and Europe's first. The unique double reward reflection will be 10% in BNB and 5% in ScorpFin token. Simply hold ScorpFin tokens and get paid, from every buy and sell to your wallet every 60 minutes"
    },
    {
        title: "Scorpion Fin Giveaways",
        body: "Up to 390 million USD worth of ScorpFin tokens will be given away to holders! This is by far the world's first mega giveaway and the team at Scorpion Finance has decided to reward it's loyal holders handsomely."
    },
    {
        title: "4 Use Cases Dapps",
        body: "We are proud to introduce our 2 use case Dapps before our launch  Scorpfolio (Track and BSC wallets ) and Scorpswap (AI swap with staking and farming). More to be revealed in coming days so stay connected and follow our various social media channels for the latest updates"
    },
];


    return (
        <div className="grid lg:grid-cols-3 p-10 xl:px-48 lg:px-32 mt-10 lg:mt-0">
            {
                featureData.map(item => (
                    <SingleGrid key={item.title} 
                    title={item.title}
                    body={item.body}
                    />
                ))
            }

        </div>
    );
}
 
export default MainFeatures;


export const SingleGrid = ({title, body}) => {
    return <div
    className="flex flex-col items-center p-6 rounded-md m-2"
    style={{
        maxWidth:'500px',
        background: "linear-gradient(153deg, rgba(51,61,101,1) 35%, rgba(29,35,58,1) 92%)"
                }}
    >
<h1
className="text-yellow-400 font-bold text-xl"
>{title}</h1>
<p
className="text-sm text-justify"
>{body}</p>
    </div>
}