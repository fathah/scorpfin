const LogoSlides = () => {
    const images = [
        "blockfolio.png", "coingecko.png","coinmarketcap.png", "coinsniper.png","whitebit.png"
    ];
    return (
       
           <div className="flex bg-white justify-center"
>
   {
        images.map(img =>(
            <img src={"/img/exLogos/"+img} 
            className="mx-10"
            style={{maxHeight:"100px"}}
            alt="" />
        ))
    }
  
</div>
       
    );
}
 
export default LogoSlides;