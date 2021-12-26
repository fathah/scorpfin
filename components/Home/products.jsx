
import Bubble from '@/components/Bubble'

const Products = () => {

    const products = [
        {
        name:"ScorpFolio",
        description:"ScorpFolio aims to be the leading network for mobile cryptocurrency portfolio tracking management. As a solution, ScorpFolio offers web and mobile application where you can overview and customize your wallets assets portfolio. We have successfully tested our application tool to analyze any wallet with BEP20 tokens.",
        img:"scorpfolio.png",
        url:"https://scorpfolio.scorpion-finance.com/"
        // https://scorpfolio.scorpion-finance.com/
    },
        {name:"ScorPay",
        description:"Pay for goods and services using your crypto currency. With ScorPay, transactions are fast, reliable, convenient, transparent and trustworthy. Building a trust network around the community, customers and retailers worldwide",
        img:"scorpay.png",
        url:"/scorppay.html"},
        {name:"ScorpSwap",
        description:"ScorpSwap allows you to stake tokens and earn more of the staked tokens as rewards. Earn tokens/coins whenever liquidity is provided. Farm by investing tokens to unlock digital wallets and get to earn from the top 100 listed tokens/coin",
        img:"scorpswap.png",
        url:"https://exchange.scorpion-finance.com/#/swap"},
        {name:"ScorpNFTracker & Market",
        description:"This application offers a market place for buying, selling and creating non-fungible tokens. ScorpNFTracker is used for real time tracking of your collectibles and historical market sales data of each NFT thus in turn rewarding users with ScorpFin tokens.",
        img:"nfttracker.png",
        url:"/scorpNFTtracker.html"},
        {
            name:"Scorp Games",
            description:"Play to Earn revolution. A new type of game partially owned and operated by it's Players, Earn Scorpfin tokens by playing and use them to decide the future of the game. This platform is open to everyone, however, by owning ScorpNFTs, players have more chances of completing the stages and ultimately earn more rewards attached to each stage. The NFTs needed will be available for purchase through the marketplace offered by the ecosystem. A lot of work will be on going to keep bringing the perfect versions of this application. Sit tight and enjoy the fun ride!",
            img:"scorpgames.png",
            url:"/scorpgames.html"
        }
    ];
    return (

        <section className="bg-sec p-10 lg:px-32 xl:px-48" id="products">
           <Bubble/>
              <h1 className="gr-text font-bold text-xl lg:text-2xl " >
                  SCORPION FINANCE PRODUCTS</h1>
                  <br />
                  {
                      products.map(product=>(
                          <div className="lg:flex my-8"
                          onClick={()=>window.open(product.url, "_blank")}
                          key={products.indexOf(product)}
                          data-aos={
                            products.indexOf(product)%2==0?
                            "fade-right":"fade-left"
                          }
                          >
                              
                             <img src={"/img/"+product.img} alt={product.name}
                             className={
                                products.indexOf(product)%2==0?
                                "w-1/2 lg:w-36 lg:h-36 lg:mx-20 mb-4 order-0"
                                :"w-1/2 lg:w-36 lg:h-36 lg:mx-20 mb-4 order-2"}
                             /> 
                             <div className="text-left">
                             <h2 className="text-xl font-semibold">{product.name}</h2>
                             <p className="text-gray-400">{product.description}</p>
                             </div>
                          </div>
                      ))
                  }
<div id="tokenomics"></div>
        </section>
    );
}
 
export default Products;