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



export default function Index() {
  return (
    <>
      <Head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
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
  <h2  className="font-extralight" data-aos="fade-right" data-aos-delay="200">WELCOME TO</h2>
  <h1 className="text-2xl font-extrabold gr-text atmos" data-aos="fade-right" data-aos-delay="300">SCORPION FINANCE</h1>
  <p className="lg:w-11/12 text-gray-400" data-aos="fade-right" data-aos-delay="500">
  Scorpion Finance a one stop solution for Portfolio Tracker, NFT Asset Tracker, 
  Swapping and the Payment solution.
  </p>
  <br />
  <div data-aos="fade-right" data-aos-delay="700">
  <a className=" gr-bg  px-4 py-2 rounded mr-2 font-semibold cursor-pointer"
  href="#buy"
  style={{pointerEvents:"auto"}}
  >BUY NOW</a>
  <a className="bg-white px-4 py-2 rounded mr-2 text-yellow-700 font-semibold cursor-pointer"
  href=""
  style={{pointerEvents:"auto"}}
  >LIVE CHARTS</a>
  </div>
  <div className="xl:hidden">
  <Social/>
  </div>
 
  


  </div>
 
  <div className="anim-item flex justify-center" >
 
    <img src="/img/scorpfin.png" className="w-8/12 mt-20 lg:mt-0 xl:w-10/12" data-aos="fade-left"  data-aos-delay="500" alt="" />
   
  </div>
 

</section>
</div>
</header>

<div id="why"></div>

<MainFeatures/>
<Why/>
<div id="buy"></div>


<BuyNow/>
<div id="products"></div>

<Products/>

<Tokenomics/>
<Timeline/>
<LogoSlides/>
<Contact/>
<Footer/>
    </>
  )
}
