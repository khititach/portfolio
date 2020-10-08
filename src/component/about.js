import * as React from 'react'
import { useHistory } from 'react-router-dom';
import Sidebar from './sidebar'
import ProfileImage from '../image/af.jpg';

function About () {
    
    const history = useHistory()
    return (
        <>
        <div className="App-init">
            {/* <Sidebar /> */}
    
            <Sidebar />
            <div className="App-info about" >
                <label className="about-header-text" >ข้อมูลส่วนตัว</label>
                <div className="about-profile-image">
                    <img src={ProfileImage} className="profile-image" alt="profile"/>
                </div>
                <div className="about-data"> 
                    <div className="about-data-text">
                        <p>นายกิตติธัช กำจร  (แอฟ)</p>
                        <p>เกิดวันที่ 16 สิงหาคม 2539 อายุ 24 ปี</p>
                        <p>น้ำหนัก 62 kg / ส่วนสูง 173 cm</p>
                        <p>ที่อยู่ 406 หมู่ 4 ตำบลหูช้าง อำเภอบ้านไร่ จังหวัดอุทัยธานี 61180 </p>
                        <p>E-mail : Khititachk58@nu.ac.th</p>
                        <p>ชอบ : เล่นเกม </p>
                        <p>สนใจ : ภาษาญี่ปุ่น</p>
                        <p>เป็นคนใจดี คุยง่าย ชอบช่วยเหลือผู้อื่น</p>
                  
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

export default About;