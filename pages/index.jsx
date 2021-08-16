import NavBar from '@/components/NavBar';
import Particle from '@/components/Particles';
import Why from '@/components/Home/Why';
import Products from '@/components/Home/products';
import Head from 'next/head'
export default function Index() {
  const gradient = "text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-700";
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
<section className="absolute px-10 lg:px-72 top-52 lg:top-60 lg:flex">
  <div>
  <h2  className="font-extralight" data-aos="fade-right" data-aos-delay="200">WELCOME TO</h2>
  <h1 className={"text-4xl font-extrabold "+gradient} data-aos="fade-right" data-aos-delay="300">SCORP FINANCE</h1>
  <p className="lg:w-1/2 text-gray-400" data-aos="fade-right" data-aos-delay="500">
  Scorp Finance a one stop solution for portfolio tracker, NFT Asset Tracker, 
  Swapping and the Payment solution.
  </p>
  <br />
  <div data-aos="fade-right" data-aos-delay="700">
  <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 px-4 py-2 rounded mr-2 font-semibold ">Know More</button>
  <button className="bg-white px-4 py-2 rounded mr-2 text-yellow-700 font-semibold ">Buy Now</button>
  </div>
  </div>
  <div className="anim-item flex justify-center" >
    <img src="/img/home.svg" className="w-6/12 mt-32 lg:mt-0 lg:w-8/12" data-aos="fade-left"  data-aos-delay="500" alt="" />
  </div>

</section>
</div></header>
<Why/>
<Products/>
      
    </>
  )
}
