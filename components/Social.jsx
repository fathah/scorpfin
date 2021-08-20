import {FaReddit, FaTelegram, FaDiscord, FaTwitter} from 'react-icons/fa'
import {AiFillTwitterCircle, AiFillRedditCircle, AiFillInstagram} from 'react-icons/ai'

const Social = () => {
    const common = "text-xl mx-2";
    return (<div
    className="py-4"
        style={{
            background:'rgba(31, 35, 43, 0.7)'
        }}
        className="p-2 flex justify-end  xl:px-48 lg:px-32"
    >
       <a href=""> <FaTelegram className={common}/></a>
       <a href=""> <AiFillTwitterCircle className={common}/></a>
       <a href=""> <FaDiscord className={common}/></a>
       <a href=""> <AiFillRedditCircle className={common}/></a>
       <a href=""> <AiFillInstagram className={common}/></a>

    </div>);
}
 
export default Social;