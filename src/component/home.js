import React from 'react'
import { useHistory } from 'react-router-dom';

function HomePage () {
    const history = useHistory();
    return (
        <>
        <div className="top"></div>
        <div className="App-init">
          
            <div className="App-body" >
                    <label className="first-name moving-text " >KHiTiTACH</label>
                    <label className="last-name fade-in ">KAMJOHN</label>
                    <div className="button menu fade-in">
                        <button className="btn-menu"  onClick={() => {history.push('/about')}}>
                            <div className="btn menu-text">
                                ข้อมูลส่วนตัว
                            </div>
                        </button>
                        <button className="btn-menu "onClick={() => {history.push('/education')}}>
                            <div className="btn menu-text">
                                การศึกษา
                            </div>
                        </button>
                        <button className="btn-menu " onClick={() => {history.push('/skill')}}>
                            <div className="btn menu-text">
                                ทักษะ
                            </div>
                        </button>
                        <button className="btn-menu " onClick={() => {history.push('/port')}}>
                            <div className="btn menu-text">
                                ผลงาน
                            </div>
                        </button>
                     
                        {/* <a className="btn-menu" href="/contact" >
                            <div className="btn menu-text">
                                CONTACT
                            </div>
                        </a> */}
                    </div>
               
                {/* sidebar */}
                {/* <Sidebar /> */}
                <div className="footer" >
                    <p>© KHiTiTACH 2020</p>
                </div>
            </div>
            
        </div>
        
        </>
    )
}

export default  HomePage;