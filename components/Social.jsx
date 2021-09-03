import { FaTelegram,FaYoutubeSquare,  FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle, AiFillYoutube, AiFillRedditCircle, AiFillInstagram, } from 'react-icons/ai'

const Social = () => {
    const common = "text-xl mx-2";
    return (<div
    className="flex mt-6"
    data-aos="fade-right"
    >
       <a href="https://t.me/ScorpFin" target="_blank"
 rel="noreferrer"
> <FaTelegram className={common}/></a>
       <a href="https://twitter.com/ScorpionFinance" target="_blank"
 rel="noreferrer"
> <AiFillTwitterCircle className={common}/></a>
       <a href="https://www.youtube.com/channel/UCmYC7gForhv5GsW6dokEoDw/featured" target="_blank"
 rel="noreferrer"
> <FaYoutubeSquare className={common}/></a>
       <a href="https://www.reddit.com/user/ScorpionFinance" target="_blank"
 rel="noreferrer"
> <AiFillRedditCircle className={common}/></a>
       <a href="https://www.instagram.com/ScorpionFinance" target="_blank"
 rel="noreferrer"
> <AiFillInstagram className={common}/></a>
       <a href="https://www.facebook.com/ScorpFin" target="_blank"
 rel="noreferrer"
> <FaFacebook className={common}/></a> 

    </div>);
}
 
export default Social;