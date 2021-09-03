import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {

return (<div className="bg-sec  lg:px-32 xl:px-48 py-6 p-10">
         <h1 className="gr-text font-bold text-xl lg:text-2xl mb-4" data-aos="zoom-in">
                  ROADMAP</h1>
        <VerticalTimeline>
  <TimelineItem phase="Q3" date="2021">
  <li>Token and contract deployment on PancakeSwap</li> <li>Website Launch </li>
  </TimelineItem>
  <TimelineItem phase="Q3" date="2021">
      <li>Coingecko/CoinMarketCap listing</li>
   <li>Integration with PancakeSwap, DexGuru & PooCoin </li>  </TimelineItem>
  <TimelineItem phase="Q3" date="2021">
  <li>Integration of all DEX&apos;s into Scorp Folio</li> 
  <li>Launch desktop version</li>
  <li>Launch ScorpFolio & ScorpSwap a decentralize exchange</li>
  </TimelineItem>
  <TimelineItem phase="Q3" date="2021">
  Integration of all DEX&apos;s into ScorpSwap Desktop & Mobile Versions (Beta) 
  </TimelineItem>
  <TimelineItem phase="Q4" date="2021">
  <li>ScorpSwap desktop and mobile staking, lending and borrowing </li>
  <li> ScorpSwap Lottery, ScorpFolio mobile app. </li>
  <li>ScorPay initial testing </li>
  <li>ScorpGames</li>
   </TimelineItem>
  <TimelineItem phase="Q4" date="2021">
  <li>Listing on a well-known exchange(e.g Kucoin, MXC, gate.io) </li>
  <li>ScorPay mobile wallet </li>
  <li>Release(Beta) Launch on Play Store</li>
  </TimelineItem>
  <TimelineItem phase="Q1" date="2022">
  <li>ScorPay Grand launch </li>
<li>ScorpNFTracker  - (NFT asset Tracker) initial Testing </li>
    <li>NFT Asset Tracker (ScorpNFTracker) Launch </li>

  </TimelineItem>
  <TimelineItem phase="Q2" date="2022">
  <li>ScorpFin Token launch on Ethereum Chain</li>
<li>ScorpFin  Token launch on Polygon Chain</li>
    <li>ScorpSwap  Beta testing</li>   </TimelineItem>
  <TimelineItem phase="Q3" date="2022">
  <li>Fiat Gateway for ScorPay Desktop and Mobile Version</li>
  <li>ScorPay  Liquidity Pool Merchant</li>
<li>ScorPay Cross-Chain-Payments Integration</li>

  </TimelineItem>

  
  
</VerticalTimeline></div>
    );
}
 
export default Timeline;


export const TimelineItem= (props)=> {
const iconStyle = { background: 'linear-gradient(to right, #F1B729 0%, #B77F19 50%,#84570C 100%)', color: '#fff', display: 'flex',alignItems: 'center', justifyContent: 'center', fontWeight:'bold' };
const bg = { background: 'linear-gradient(to right, #F1B729 0%, #B77F19 50%,#84570C 100%)', color: '#fff' };

    return (
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={bg}
    contentArrowStyle={{ borderRight: '7px solid #84570C' }}
    date={props.date}
    dateClassName="hidden"
    iconStyle={iconStyle}
    icon={props.phase}
  >
    
        <p className="pl-3"> <ul
        className="list-outside list-square"
        >
    {props.children}</ul></p>
    
  </VerticalTimelineElement>
    );
}