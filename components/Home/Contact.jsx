import {useState, useRef } from 'react'
var qs = require('qs');

const Contact = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [msg, setMsg] = useState("");
    const [response, setResponse] = useState();
    const formRef = useRef();

    const sendMessage = async () => {
       await fetch("https://scorpion-finance.com/mail.php",
       {
        method: 'POST',
        body: qs.stringify({
            nme:name,mail:mail,msg:msg,
            api:"14BexZMoP1gqvSbLZSfYigjUvfcXkroScK046636f7a5df"
        }),
        headers: { 
            'Accept': 'application/json',
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        }
       }
       ).then(v=>setResponse("Thanks for contacting us. We will get back soon.")
      
       );
    }
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
<form 
ref={formRef}
onSubmit={(e) =>{
    e.preventDefault();
    sendMessage().then(v=>e.target.reset());
}}>
<input type="text"  className="input" 
onChange={(e)=>setName(e.target.value)}
placeholder="Full Name" 
autoComplete={'' + Math.random()} required />
<input type="email"  
className="input" 
onChange={(e)=>setMail(e.target.value)}
placeholder="Email Address" autoComplete={'' + Math.random()} required  />
<textarea
onChange={(e)=>setMsg(e.target.value)}
rows="5" className="input" placeholder="Message" autoComplete={'' + Math.random()} required  >
</textarea>
<div className="flex justify-center mt-3">
<button type="submit"
className="gr-bg px-4 py-3 rounded">Send Message</button>
</div>

<br />
<div className="flex justify-center">
{response && (
    <h4 
    className="text-center bg-white bg-opacity-10 rounded inline-block px-4 py-1"
    
    >{response}</h4>
)}

</div>
</form>


</div></section>

    );
}
 
export default Contact;