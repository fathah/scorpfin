const Contact = () => {
    return (
        <section className="flex flex-col items-center w-full">
           
                <div className="flex flex-col items-center mt-10">
                <h1 className="text-white font-extrabold text-xl">
                    Get in touch with us</h1>
                <a href="mailto:support@scorpion-finance.com" 
                className="font-extralight text-yellow-400">
                    support@scorpion-finance.com</a>
            
                </div>
<div className="p-10 w-full xl:px-48 lg:px-32  lg:w-8/12">
<form action="" method="post">


<input type="text"  className="input" placeholder="Full Name" autoComplete={'' + Math.random()} required />
<input type="email"  className="input" placeholder="Email Address" autoComplete={'' + Math.random()} required  />
<textarea name="message"  rows="5" className="input" placeholder="Message" autoComplete={'' + Math.random()} required  >
</textarea>
<div className="flex justify-center mt-3">
<button type="submit" className="gr-bg px-4 py-3 rounded">Send Message</button>

</div>
</form>


</div></section>

    );
}
 
export default Contact;