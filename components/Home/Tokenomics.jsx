
import Tilt from 'react-parallax-tilt';
import Chart from "react-google-charts";

const Tokenomics = () => {
    return (
        <div className="lg:px-32 xl:px-48 py-10 p-10">
<div className="md:grid md:grid-cols-2">
    <Tilt><div
    className="main-features-grid flex flex-col items-center pt-6 px-6 rounded-lg m-4 "
    style={{
        minHeight:"350px"
    }}
    >
<h1 className="gr-text font-bold text-xl lg:text-2xl my-4" 
data-aos="zoom-in">
TOKENOMICS</h1>
{/* <p
className="text-justify lg:text-xl"
>
<span className="gr-text">100 Billion</span>  Total Supply <br />
<span className="gr-text">63%</span> Token Sales  <br />
<span className="gr-text">10%</span> Ecosystem and community <br />
<span className="gr-text">8%</span>    Development, marketing and R&D <br />
<span className="gr-text"> 4%</span>    Founders and Team <br />
<span className="gr-text">15%</span> Farming and staking <br />
</p> */}
<div className="text-white">
<Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div><img src="/img/scorp.gif" style={{width:"150px"}} alt="" /> </div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Token Sales', 63],
    ['Ecosystem and community', 10],
    ['Development', 4],
    ['Marketing and R&D', 4],
    ['Founders and Team', 4],
    ['Farming and Staking', 15],
  ]}
  options={{
    title: '100 Billion Total Supply',
    pieHole: 0.4,
    backgroundColor:"transparent",
    colors:["#11397F","#634F94","#9A6BA2","#C98BB2","#3B8DB5","#2764A5",],
    hAxis: {
        textStyle: {
            color: '#ffffff'
        }
    },
    vAxis: {
        textStyle: {
            color: '#ffffff'
        }
    },
    legend: {
        textStyle: {
            color: '#ffffff'
        }
    },
    titleTextStyle: {
        color: '#ffffff'
    }
  }}
 
  rootProps={{ 'data-testid': '3' }}
/></div>
    </div> </Tilt>
    <Tilt><div
    className="main-features-grid relative flex flex-col items-center p-6 rounded-lg m-4"
    style={{
        minHeight:"350px"
    }}
    >
       <h1 className="gr-text font-bold text-xl lg:text-2xl my-4" 
data-aos="zoom-in">
SCORPFIN SLIPPAGE</h1>
        <section className="md:grid md:grid-cols-2">

            <div>
                <h3 className="text-gray-500 font-bold text-center text-xl">BUY</h3>
<span className="gr-text mr-1">&#8651;</span> Buy slippage 13% <br />
<span className="gr-text mr-1">&#8651;</span> 5% BNB <br />
<span className="gr-text mr-1">&#8651;</span> 2% ScorpFin Tokens <br />
<span className="gr-text mr-1">&#8651;</span> 3% Auto-liquidity <br />
<span className="gr-text mr-1">&#8651;</span> 3% Marketing
            </div>


            <div>
            <h3 className="text-gray-500 font-bold text-center text-xl">SELL</h3>
<span  className="gr-text mr-1">&#8651;</span> Sell Slippage 16% <br />
<span  className="gr-text mr-1">&#8651;</span> 5% BNB <br />
<span  className="gr-text mr-1">&#8651;</span> 2% ScorpFin Tokens <br />
<span  className="gr-text mr-1">&#8651;</span> 3% Auto-liquidity <br />
<span  className="gr-text mr-1">&#8651;</span> 3% Marketing <br />
<span  className="gr-text mr-1">&#8651;</span> 3% Buyback and Burn <br />
            </div>


        </section>
        </div>
        </Tilt>
    
    
    

    {/* <div className="lg:w-6/12 hidden lg:flex justify-end ">
     <Lottie animationData={tokenomics} className="w-10/12"  />
    </div> */}

    </div>


        </div>
    );
}
 
export default Tokenomics;