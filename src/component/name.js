import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom';
import Sidebar from './sidebar'
function NamePage () {
    const history = useHistory()
    return (
        <div className="App-init">
            <div className="App-body" >
                <label className="first-name moving-text " >KHiTiTACH</label>
                <label className="last-name fade-in ">KAMJOHN</label>
                {/* button */}
                <div className="btn fade-in">
                    <button className="btn-menu " onClick={() => {history.push('/about')}}>ABOUT</button>
                    <button className="btn-menu" onClick={() => {history.push('/skill')}}>SKiLL</button>
                    <button className="btn-menu" onClick={() => {history.push('/contact')}}>CONTACT</button>
                </div>
                
                {/* sidebar */}
                {/* <Sidebar /> */}

            </div>
        </div>
        
    )
}

export default NamePage;