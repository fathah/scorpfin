import {FaReddit, FaTelegram, FaDiscord, FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle, AiFillRedditCircle, AiFillInstagram, AiFillYoutube, AiFillFacebookCircle} from 'react-icons/ai'

const Social = () => {
    const common = "text-xl mx-2";
    return (<div
    className="py-4"
        style={{
            background:'rgba(31, 35, 43, 0.7)'
        }}
        className="flex justify-end  xl:px-48 lg:px-32  px-10 py-4"
    >
       <a href=""> <FaTelegram className={common}/></a>
       <a href=""> <AiFillTwitterCircle className={common}/></a>
       <a href=""> <FaDiscord className={common}/></a>
       <a href=""> <AiFillRedditCircle className={common}/></a>
       <a href=""> <AiFillInstagram className={common}/></a>
       <a href=""> <FaFacebook className={common}/></a> 

    </div>);
}
 
export default Social;