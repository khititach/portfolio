import * as React from 'react';
import { useHistory } from 'react-router-dom';

function StartPage () {
    const history = useHistory()
    const GotoResume = function () {
        // console.log('hidden page')
        // document.getElementById('startPage').hidden = true
        history.push('/home')
    }
    return (
        <div className="App-init start-page" id="startPage">

            {/* <button className="btn start" onClick={GotoResume} ><i className="fas fa-play logo"></i></button> */}
            {/* circle center */}
            <div class="circle">
                <span class="circle__el"></span>
            </div>   
            <div class="circle">
                <span class="circle__el circle__el_two"></span>
            </div>    
            <div class="circle">
                <span class="circle__el circle__el_three"></span>
            </div>
            <div class="circle">
                <span class="circle__el circle__el_four"></span>
            </div>

            <button className="btn start" onClick={GotoResume} ><i className="fas fa-play logo"></i></button>
        </div>
    )
}

export default  StartPage;