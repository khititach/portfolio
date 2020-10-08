import * as React from 'react'
import { useHistory } from 'react-router-dom';
import Sidebar from './sidebar'

function Skill () {
    const skill = {
        nodejs:{
            name:'NodeJS',
            level:'ระดับปานกลาง',
            icon:"devicon-mongodb-plain-wordmark"
        },
        javascript:{
            name:'JavaScript',
            level:'ระดับปานกลาง'
        },
        html:{
            name:'HTML',
            level:'ระดับปานกลาง'
        },
        mongodb:{
            name:'MongoDB',
            level:'ระดับปานกลาง'
        },
        react:{
            name:'React',
            level:'ระดับเริ่มต้น'
        },
        css:{
            name:'CSS SCSS',
            level:'ระดับปานกลาง'
        }
    }
    const history = useHistory();


    return (
        <>
            <div className="App-init">
                {/* <Sidebar /> */}
        
                <Sidebar />
                <div className="App-info skill" >
                    <label className="skill-header-text" >ทักษะ</label>
                    <div className="skill-data"> 
                        <div className="skill-data-text">
                            <p><i className="devicon-html5-plain-wordmark"></i>  {skill.html.name} {skill.html.level}</p>
                            <p><i className="devicon-javascript-plain"></i>{skill.javascript.name} {skill.javascript.level}</p>
                            <p><i className="devicon-css3-plain-wordmark"></i> {skill.css.name} {skill.css.level}</p>
                            <p><i className="devicon-nodejs-plain-wordmark"></i> {skill.nodejs.name} {skill.nodejs.level}</p>
                            <p><i className="devicon-mongodb-plain-wordmark"></i> {skill.mongodb.name} {skill.mongodb.level}</p>
                            <p><i className="devicon-react-plain-wordmark"></i> {skill.react.name} {skill.react.level}</p>
                            
                        </div>
                    </div>
                </div>
                {/* <Sidebar /> */}
            </div>
            <div className="btn-back-mb">
                <button className="btn-back" onClick={() => {history.goBack()}}>Back</button>
            </div>
      
        </>
    )
}

export default Skill;