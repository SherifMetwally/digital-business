import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faEnvelope , faLinkedIn } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'



export default function Buttons() {
    return(
        <div className="buttons">
            <div className='email'>
            <FontAwesomeIcon icon={faEnvelope} />
            <label> Email </label>
            </div>
            <div className='linkedin'>
            <FontAwesomeIcon icon={faLinkedin} />
            <label> Linkedin </label>
            </div>
        </div>
        // <FontAwesomeIcon icon={faCoffee} />
    )
}