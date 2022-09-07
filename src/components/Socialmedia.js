import twitter from '../images/Twitter Icon.png'
import facebook from '../images/Facebook Icon.png'
import github from '../images/GitHub Icon.png'
import instagram from '../images/Instagram Icon.png'

export default function Socialmedia () {
    return (
        <div className="social-media">
            <img src={twitter} />
            <img src={facebook} />
            <img src={instagram} />
            <img src={github} />
        </div>
    )
}