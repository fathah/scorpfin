import NavBar from '@/components/NavBar';
import Particle from '@/components/Particles';
import Why from '@/components/Home/Why';
import Products from '@/components/Home/products';
import Head from 'next/head'
import Timeline from '@/components/Home/Timeline'
import Tokenomics from '@/components/Home/Tokenomics'
import Footer from '@/components/Footer'
import Social from '@/components/Social';
import MainFeatures from '@/components/Home/MainFeatures'
import LogoSlides from '@/components/Home/LogoSlides'
import Contact from '@/components/Home/Contact'
import BuyNow from '@/components/Home/Buy'
import FeaturesSlide from '@/components/Home/SlideFeatures'
import Certificates from '@/components/Home/Certificates'
import TokenFeatures from '@/components/Home/TokenFeatures'
import HowToBuy from '@/components/Home/HowToBuy'


export default function Index() {
  return (
    <>
      <Head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      <title>Scorpion Finance</title>
      </Head>
     <Particle/>
      <NavBar/>      
      <header>
<div
className="top-0 w-full h-full"
style={{
  height:"100vh",
  width:"100%",
  backgroundImage:"url('/img/bg.png')",
  backgroundSize:"cover",
  backgroundPosition:"center"
}}
>
{/* text-3xl font-bold lg:text-5xl text-yellow-500 */}
<section className="absolute z-20 px-10 xl:px-48 lg:px-32 top-52 lg:top-60 lg:flex"
style={{pointerEvents:"none"}}
>
  <div>
  <h2  className="font-extralight">WELCOME TO</h2>
  <h1 className="text-2xl font-extrabold gr-text atmos" >SCORPION FINANCE</h1>
  <p className="lg:w-11/12 text-gray-400" >
  Scorpion Finance a one stop solution for Portfolio Tracker, NFT Asset Tracker, 
  Swapping, Payment solution and Gaming Platform.
  </p>
  <br />
  <div className="flex flex-wrap-reverse" >
  <a className=" gr-bg  px-4 py-2 mb-4 rounded mr-2 cursor-pointer"
  href="#buy"
  style={{pointerEvents:"auto"}}
  >BUY</a>
  <a className=" bg-white text-yellow-700 px-4 py-2 mb-4 rounded mr-2  cursor-pointer"
  href="#audit"
  style={{pointerEvents:"auto"}}
  >AUDIT</a>
  
  <a className="bg-transparent px-4 py-2 mb-4 rounded mr-2 text-white border-2 border-white  cursor-pointer"
  href="https://poocoin.app/tokens/0x475c8df9860e42605d9917f0a2e522cc861cbf82"
  target="_blank"
        rel="noreferrer"
  style={{pointerEvents:"auto"}}
  >LIVE CHARTS</a>
  </div>
  <div className="xl:hidden"  style={{pointerEvents:"auto"}}>
  {/* <Social/> */}
  </div>
  <section className="flex mt-4"  style={{pointerEvents:"auto"}}
  >
    <div className="mr-4 p-5 rounded text-center"
    onClick={()=>window.open('https://scorpfolio.scorpion-finance.com/','_blank')}
    >
      <span className="gr-text font-bold">ScorpFolio</span>  <br />
    
     <span className="glow text-white"> LIVE NOW</span>
    
    
      
     <div className="gr-bg text-white px-3 py-1 mt-2 rounded cursor-pointer  text-xs lg:text-base"> Track Your Assets</div>
    </div>
    <div className="p-5 rounded text-center"
    onClick={()=>window.open('https://exchange.scorpion-finance.com/#/swap','_blank')}
    >
      <span className="gr-text font-bold">ScorpSwap</span> <br />
      <span className="glow"> LIVE NOW </span>
     
     <div className="gr-bg text-white px-3 py-1 mt-2 rounded cursor-pointer text-xs lg:text-base">
     Trade Your Assets
     </div>
    </div>

  </section>
 {/* DASHBOARD SECTION */}
<section className="flex justify-center w-8/12 mt-4"
 style={{pointerEvents:"auto"}}
>
  <button
  className="gr-bg p-4 rounded font-bold button-glow "
  style={{pointerEvents:"auto"}}
  onClick={()=>window.open('https://rewards.scorpion-finance.com/rewards.html','_blank')}
  >CLAIM REWARDS</button>
  </section>  


  </div>
 
  <div className="anim-item flex justify-center" >
 
    <img src="/img/scorpfin.png" className="hidden lg:block w-8/12 mt-16 lg:mt-0 xl:w-10/12" 
     alt="" />
   
  </div>
 

</section>
</div>
</header>


<MainFeatures/>
<div id="why"></div>
{/* <img src="/img/banner.png" style={{width: "100%",}} alt="" id="why" /> */}
<Why/>
<div id="buy"></div>

<Certificates/>
<BuyNow/>
<FeaturesSlide/>
<div id="products"></div>
<Products/>

<Tokenomics/>
<TokenFeatures/>
<Timeline/>
<HowToBuy/>
<LogoSlides/>
<Contact/>
<Footer/>
    </>
  )
}
