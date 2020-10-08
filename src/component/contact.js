import * as React from 'react'
import { useHistory } from 'react-router-dom';
import Sidebar from './sidebar'

function Contact () {
    const history = useHistory()
    return (
        <div className="App-info">
            <Sidebar />
            <div className="about">
            Contact
            <div className="btn">
                    <button onClick={() => {history.goBack()}}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;