import { FaTelegram,FaYoutubeSquare,  FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle, AiFillYoutube, AiFillRedditCircle, AiFillInstagram, } from 'react-icons/ai'

const Social = () => {
    const common = "text-xl mx-2";
    return (<div
    className="flex mt-6"
    data-aos="fade-right"
    >
       <a href="https://t.me/ScorpFin"> <FaTelegram className={common}/></a>
       <a href="https://twitter.com/ScorpionFinance"> <AiFillTwitterCircle className={common}/></a>
       <a href=""> <FaYoutubeSquare className={common}/></a>
       <a href="https://www.reddit.com/user/ScorpionFinance"> <AiFillRedditCircle className={common}/></a>
       <a href="https://www.instagram.com/ScorpionFinance"> <AiFillInstagram className={common}/></a>
       <a href="https://www.facebook.com/ScorpFin"> <FaFacebook className={common}/></a> 

    </div>);
}
 
export default Social;