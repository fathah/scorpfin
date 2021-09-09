const TokenFeatures = () => {
    const features = [
        {title:"10% Reflection Reward In $BNB", 
        body:"5% of every buy & 5% of every sell are taken and redistributed to all holders in BNB. Hold ScorpFin tokens, earn BNB. ",
        icon:""    
    },
    {title:"5% Reflection Reward in ScorpFin", 
        body:"2% of every buy & 3% of every sell is taken and redistributed to all holders in ScorpFin. Hold ScorpFin tokens, earn ScorpFin. Hold ScorpFin to earn more ScorpFin reflection rewards. ",
        icon:""    
    },
    {title:"Auto Paid Every 60 Minutes", 
        body:"You don’t need to claim you’re earned BNB & ScorpFin. It’s automatically sent to your wallet every 60 minutes. ",
        icon:""    
    },
    {title:"Hyper-Deflation", 
        body:"2% Auto Buyback & Burn ScorpFin, 2% of every sell transaction is transformed into ScorpFin (2%) for auto Buyback & burn. Once the system detects a sell, it will auto-buy back a certain value of tokens.",
        icon:""    
    },
    {title:"Big Marketing Plan", 
        body:"3% of every transaction is allocated to the marketing wallet. So we can fuel the most ambitious project and reward our active community.        ",
        icon:""    
    },
    {title:"3% Auto Growing Liquidity", 
        body:"ScorpFin has an automatic liquidity pool algorithm (AutoLP) in its token contract with each trade, the underlying liquidity automatically grows 3%. This means a stronger token and less volatility.",
        icon:""    
    },
    ];
    return (
        <div>
            <section className="md:grid md:grid-cols-3 lg:mx-48 pb-10">
                {
                    features.map(item => (
                        <div
                        key={item.title}
                        className="main-features-grid flex justify-center p-6 rounded-lg m-4"
                        >
                            <div>
                            <span className="gr-text text-lg font-bold block text-center">{item.title}</span>
                            <span className="text-gray-400 block text-center">{item.body}</span>
                            </div>
                        </div>
                    )
                        
                    )
                }
            </section>
        </div>
    );
}
 
export default TokenFeatures;