const NavBar = () => {
    const navItems = [
        {"title":"Why Scorp Fin", "to":"#why"},
        {"title":"Products", "to":""},
        {"title":"Buy Now", "to":""},
        {"title":"Tokenomics", "to":""},
        {"title":"", "to":""},
    ];
    return (
        <nav className="fixed flex top-0 z-10 bg-primary w-full px-10 lg:px-72 py-2 justify-between">
            <div>
                <img src="/img/logo.png" className="w-20" alt="" data-aos="fade-right" />
            </div>
            {/* DESKTOP MENU */}
            <div className="hidden lg:block my-4">
            {
                navItems.map((item) => {
                    return (
                        <a href={item.to} className="mx-4 menu-item">{item.title.toUpperCase()}</a>
                    )
                })
            }
            </div>


        </nav>
    );
}
 
export default NavBar;