import * as React from 'react'
import { useHistory } from 'react-router-dom';
import Sidebar from './sidebar'
import ProjectimageAdmin from '../image/admin_home_page.jpg'
import ProjectimageStudent from '../image/student_home_page.jpg'
import ProjectimageStore from '../image/home_page_new.jpg'


function Portfolio () {
    
    const history = useHistory()
    return (
        <>
        <div className="App-init">
            {/* <Sidebar /> */}
    
            <Sidebar />
            <div className="App-info portfolio" >
                <label className="portfolio-header-text" >ผลงาน</label>
                <div className="portfolio-data">
                    <div className="portfolio-data-text">
                        <p>ทำระบบจ่ายเงินด้วยบัตรนักเรียน โดยตัวระบบนี้จะแบ่งผู้ใช้ออกเป็น 3 บทบาท คือ ผู้ดูแล นักเรียน และร้าน ในระบบการใช้จ่ายด้วยบัตรนักเรียนที่พัฒนาขึ้นนี้ สามารถเติมเงินและชำระเงินได้ 2 รูปแบบ คือ</p>
                        <p>1. การใช้บัตรนักเรียนแบบ RFID แสกนผ่านเครื่องอ่านบัตร (RFID Reader)</p>
                        <p>2. การกรอกรหัสนักเรียนผ่านแป้นพิมส์</p>
                    </div>

                    <div className="carousel-box">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={ProjectimageAdmin} alt="admin" className="portfolio-data-image" />
                                </div>
                                <div class="carousel-item">
                                    <img src={ProjectimageStudent} alt="student" className="portfolio-data-image" />
                                </div>
                                <div class="carousel-item">
                                    <img src={ProjectimageStore} alt="store" className="portfolio-data-image" />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    {/* <div className="portfolio-data-img marquee">
                        <div className="portfolio-data-img-block-1">
                            <img src={ProjectimageAdmin} className="portfolio-data-image" />
                        </div>
                        <div className="portfolio-data-img-block-2">
                            <img src={ProjectimageStudent} className="portfolio-data-image" />
                        </div>
                        <div className="portfolio-data-img-block-3">
                            <img src={ProjectimageStore} className="portfolio-data-image" />
                        </div>
                    </div> */}
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

export default Portfolio;