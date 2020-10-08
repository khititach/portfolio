import React from 'react'

function HomePage () {
    return (
        <>
        <div className="top"></div>
        <div className="App-init">
          
            <div className="App-body" >
                    <label className="first-name moving-text " >KHiTiTACH</label>
                    <label className="last-name fade-in ">KAMJOHN</label>
                    <div className="button menu fade-in">
                        <a className="btn-menu" href="/about" >
                            <div className="btn menu-text">
                                ข้อมูลส่วนตัว
                            </div>
                        </a>
                        <a className="btn-menu " href="/education" >
                            <div className="btn menu-text">
                                การศึกษา
                            </div>
                        </a>
                        <a className="btn-menu " href="/skill" >
                            <div className="btn menu-text">
                                ทักษะ
                            </div>
                        </a>
                        <a className="btn-menu " href="/port" >
                            <div className="btn menu-text">
                                ผลงาน
                            </div>
                        </a>
                     
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