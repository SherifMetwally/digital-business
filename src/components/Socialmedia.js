import twitter from '../images/Twitter Icon.png'
import facebook from '../images/Facebook Icon.png'
import github from '../images/GitHub Icon.png'
import instagram from '../images/Instagram Icon.png'

export default function Socialmedia () {
    return (
        <div className="social-media">
            <img src={twitter} alt="twitter"/>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram"/>
            <img src={github} alt="github"/>
        </div>
    )
}