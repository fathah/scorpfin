import { useState } from "react";
import Social from "./Social"

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    const navItems = [
        {"title":"Why Scorp Fin", "to":"#why"},
        {"title":"Products", "to":"#products"},
        {"title":"Buy Now", "to":"#buy"},
        {"title":"Tokenomics", "to":"#tokenomics"},
        
    ];
    return (<div className="fixed top-0 z-40   w-full">
    
        <nav className="flex px-2 pr-4 xl:px-48 lg:px-32 py-2 justify-between"
        style={{
            background:'rgb(21,27,40)'
        }}
        >
            <div className="flex">
                <img src="/img/logo.png" className="w-20" alt="" data-aos="fade-right" />
                <div className="block ml-5"><Social/></div>
            </div>
            {/* DESKTOP MENU */}
            <div className="hidden lg:block my-4">

            {
                navItems.map((item) => {
                    return (
                        <a 
                        key={navItems.indexOf(item)}
                        href={item.to} className="mx-4 menu-item">{item.title.toUpperCase()}</a>
                    )
                })
            }
            </div>
            {/* MOBILE MENU */}
            <div className="lg:hidden mt-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"  
                onClick={()=>setNavbar(true)}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"
 
  />
</svg>
            </div>

            {navbar && 
            (<menu 
            className="absolute z-50 right-10 bg-gray-700 w-1/2 pt-4 pb-10 rounded lg:hidden"
            data-aos="fade-down"
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute right-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
             onClick={()=>setNavbar(false)}
            >
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
<br /> <br />
                {
                    navItems.map((item) => {
                        return (
                            <a 
                            key={navItems.indexOf(item)}
                            href={item.to} 
                            onClick={() =>setNavbar(false)}
                            className="block px-4 py-2 hover:bg-gray-500">
                                {item.title.toUpperCase()}</a>
                        )
                    }) 
                }
            </menu>)
            }


        </nav>
        {navbar && (<div
className="fixed z-30 bg-black opacity-80 w-full h-full"
onClick={() =>setNavbar(false)}
>

</div>)}
        </div>
    );
}
 
export default NavBar;